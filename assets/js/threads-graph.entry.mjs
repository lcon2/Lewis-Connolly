/**
 * Source for the Threads map. Rebuild bundle: npm install && npm run build:threads-graph
 * (graphology + sigma + d3-force; output: threads-graph.bundle.js)
 */
import Graph from "graphology";
import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceRadial,
  forceSimulation,
} from "d3-force";
import { Sigma } from "sigma";

const NODE_DEFAULT_SIZE = 12;

const POSITIONS_KEY = "threads-graph-positions-v2";
const CLICK_PX = 6;
/** Lerp toward cursor while dragging (higher = snappier). */
const LERP_K = 0.52;
/** Graph-space collision radius around each node (Sigma coords). */
const COLLIDE_RADIUS = NODE_DEFAULT_SIZE + 8;
/** ~3-month bands from oldest post in the set (days). */
const TIME_BAND_DAYS = 90;
const MS_PER_DAY = 86400000;
/** Pull toward time ring (higher = stickier radius). */
const RADIAL_STRENGTH = 0.052;
const CHARGE_STRENGTH = -38;
/** Min distance from non-incident edges (graph units). */
const EDGE_REPULSE_MARGIN = 26;
const EDGE_REPULSE_STRENGTH = 0.15;
/** While dragging: orbit scale around barycenter toward cursor (radians, scaled by influence). */
const DRAG_CONSTELLATION_ORBIT = 0.00095;
/** While dragging: pull non-dragged nodes toward cursor (very small). */
const DRAG_CONSTELLATION_PULL = 0.022;
/** Simulation ticks per frame while dragging (higher = snappier separation). */
const DRAG_SIM_TICKS = 9;

const NODE_BASE = "#c9a962";
const NODE_MUTED = "#5c5238";
const NODE_FOCUS = "#e8cf7a";
const NODE_NEIGHBOR = "#d4b86a";

const EDGE_REL = "#6e6e6e";
const EDGE_REL_DIM = "#4a4a4a";
/** Thread (precursor) — red */
const EDGE_THREAD = "#801f22";
const EDGE_THREAD_DIM = "#501015";
/** Conceptual bridge — steel blue */
const EDGE_CONCEPTUAL = "#5f7583";
const EDGE_CONCEPTUAL_DIM = "#3d4a52";

const EDGE_SIZE_REL = 1.2;
const EDGE_SIZE_CONCEPTUAL = 2.3;
const EDGE_SIZE_THREAD = 3.4;

/**
 * Nudge all sim nodes except the dragged one: slow rotation about barycenter + drift toward (gx, gy).
 */
function applyConstellationFollowToward(gx, gy, simNodes, dragNodeId) {
  if (simNodes.length === 0) return;
  let sx = 0;
  let sy = 0;
  for (const n of simNodes) {
    sx += n.x;
    sy += n.y;
  }
  const p = { x: sx / simNodes.length, y: sy / simNodes.length };
  const toCx = gx - p.x;
  const toCy = gy - p.y;
  const toCLen = Math.hypot(toCx, toCy) || 1;
  const inf = Math.min(1.4, toCLen / 95);
  const theta = DRAG_CONSTELLATION_ORBIT * inf;
  const ct = Math.cos(theta);
  const st = Math.sin(theta);
  const pull = DRAG_CONSTELLATION_PULL * 0.018 * inf;

  for (const n of simNodes) {
    if (n.id === dragNodeId) continue;
    const rx = n.x - p.x;
    const ry = n.y - p.y;
    n.x = p.x + rx * ct - ry * st;
    n.y = p.y + rx * st + ry * ct;
    n.x += toCx * pull;
    n.y += toCy * pull;
  }
}

function threadsLightLabelRenderer(context, data, settings) {
  if (!data.label) return;
  const size = settings.labelSize;
  const font = settings.labelFont;
  const weight = settings.labelWeight;
  context.fillStyle = "#e8e8e8";
  context.font = `${weight} ${size}px ${font}`;
  context.fillText(data.label, data.x + data.size + 4, data.y + size / 3);
}

function parsePostDateMs(iso) {
  const t = Date.parse(String(iso || ""));
  return Number.isFinite(t) ? t : NaN;
}

/**
 * Stepped ~quarterly rings from min date: older bands smaller targetR, newer larger.
 * Returns map id -> { x, y, targetR } for initial placement and radial force.
 */
function layoutTimeBandsQuarterly(sortedAsc) {
  const rMin = 48;
  const rMax = 240;
  const positions = new Map();
  const n = sortedAsc.length;
  if (n === 0) return positions;
  if (n === 1) {
    positions.set(sortedAsc[0].id, { x: 0, y: 0, targetR: rMin });
    return positions;
  }

  const bandMs = TIME_BAND_DAYS * MS_PER_DAY;
  const dated = sortedAsc.map((node) => ({
    node,
    t: parsePostDateMs(node.date),
  }));
  const finite = dated.filter((d) => !Number.isNaN(d.t));

  if (finite.length === 0) {
    sortedAsc.forEach((node, rank) => {
      const t = rank / (n - 1);
      const r = rMin + t * (rMax - rMin);
      const angle = (2 * Math.PI * rank) / n - Math.PI / 2;
      positions.set(node.id, {
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
        targetR: r,
      });
    });
    return positions;
  }

  const minT = Math.min(...finite.map((d) => d.t));
  const bandById = new Map();
  let maxBand = 0;
  for (const { node, t } of dated) {
    let b;
    if (Number.isNaN(t)) {
      b = 0;
    } else {
      b = Math.max(0, Math.floor((t - minT) / bandMs));
      maxBand = Math.max(maxBand, b);
    }
    bandById.set(node.id, b);
  }
  for (const { node, t } of dated) {
    if (Number.isNaN(t)) {
      bandById.set(node.id, maxBand);
    }
  }

  function targetRForBand(band) {
    if (maxBand === 0) return rMin;
    return rMin + (band / maxBand) * (rMax - rMin);
  }

  const byBand = new Map();
  for (const node of sortedAsc) {
    const b = bandById.get(node.id) ?? 0;
    if (!byBand.has(b)) byBand.set(b, []);
    byBand.get(b).push(node);
  }

  const bandKeys = [...byBand.keys()].sort((a, b) => a - b);
  let bandPhase = 0;
  for (const b of bandKeys) {
    const group = byBand
      .get(b)
      .slice()
      .sort((a, c) => String(a.date).localeCompare(String(c.date)));
    const tr = targetRForBand(b);
    const k = group.length;
    for (let j = 0; j < k; j++) {
      const node = group[j];
      const theta = ((2 * Math.PI * j) / k || 0) + bandPhase;
      positions.set(node.id, {
        x: Math.cos(theta) * tr,
        y: Math.sin(theta) * tr,
        targetR: tr,
      });
    }
    bandPhase += Math.PI / 7;
  }

  return positions;
}

/** Push nodes off non-incident edge segments so disks do not sit on lines. */
function forceEdgeRepulse(links) {
  let nodes;
  function force(alpha) {
    const k = EDGE_REPULSE_STRENGTH * alpha;
    const margin = EDGE_REPULSE_MARGIN;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      for (let j = 0; j < links.length; j++) {
        const l = links[j];
        const na = l.source;
        const nb = l.target;
        if (node === na || node === nb) continue;
        const ax = na.x;
        const ay = na.y;
        const bx = nb.x;
        const by = nb.y;
        const abx = bx - ax;
        const aby = by - ay;
        const apx = node.x - ax;
        const apy = node.y - ay;
        const abLen2 = abx * abx + aby * aby || 1e-12;
        let t = (apx * abx + apy * aby) / abLen2;
        t = Math.max(0, Math.min(1, t));
        const cx = ax + t * abx;
        const cy = ay + t * aby;
        let dx = node.x - cx;
        let dy = node.y - cy;
        const dist = Math.hypot(dx, dy);
        if (dist < 1e-6) continue;
        const penetration = margin - dist;
        if (penetration <= 0) continue;
        dx /= dist;
        dy /= dist;
        node.vx += dx * penetration * k;
        node.vy += dy * penetration * k;
      }
    }
  }
  force.initialize = (_) => {
    nodes = _;
  };
  return force;
}

function fitSigmaViewport(sigma, graph, padding = 88) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  graph.forEachNode((_id, a) => {
    const sz = a.size || NODE_DEFAULT_SIZE;
    minX = Math.min(minX, a.x - sz);
    maxX = Math.max(maxX, a.x + sz);
    minY = Math.min(minY, a.y - sz);
    maxY = Math.max(maxY, a.y + sz);
  });
  if (!Number.isFinite(minX)) return;
  sigma.setCustomBBox({
    x: [minX - padding, maxX + padding],
    y: [minY - padding, maxY + padding],
  });
  sigma.getCamera().setState({ x: 0.5, y: 0.5, ratio: 1, angle: 0 });
  sigma.refresh();
}

function mergeSavedPositions(graph) {
  try {
    const raw = sessionStorage.getItem(POSITIONS_KEY);
    if (!raw) return;
    const map = JSON.parse(raw);
    if (!map || typeof map !== "object") return;
    for (const [id, pos] of Object.entries(map)) {
      if (
        graph.hasNode(id) &&
        pos &&
        typeof pos.x === "number" &&
        typeof pos.y === "number"
      ) {
        graph.setNodeAttribute(id, "x", pos.x);
        graph.setNodeAttribute(id, "y", pos.y);
      }
    }
  } catch (_) {
    /* ignore */
  }
}

function persistPositions(graph) {
  const positions = {};
  graph.forEachNode((id, attr) => {
    positions[id] = { x: attr.x, y: attr.y };
  });
  try {
    sessionStorage.setItem(POSITIONS_KEY, JSON.stringify(positions));
  } catch (_) {
    /* ignore */
  }
}

function openPostInNewTab(baseurl, postPath) {
  const prefix = typeof baseurl === "string" ? baseurl : "";
  const p = postPath.startsWith("/") ? postPath : `/${postPath}`;
  const url = `${window.location.origin}${prefix}${p}`;
  window.open(url, "_blank", "noopener,noreferrer");
}

function viewportFromClient(container, clientX, clientY) {
  const r = container.getBoundingClientRect();
  return { x: clientX - r.left, y: clientY - r.top };
}

function showGraphError(container, summary, err) {
  const wrap = document.createElement("div");
  wrap.className = "threads-graph-error";
  wrap.setAttribute("role", "alert");
  const p = document.createElement("p");
  p.className = "threads-graph-error__summary";
  p.textContent = summary;
  wrap.appendChild(p);
  if (err) {
    const det = document.createElement("details");
    det.className = "threads-graph-error__details";
    const sm = document.createElement("summary");
    sm.textContent = "Technical details";
    det.appendChild(sm);
    const pre = document.createElement("pre");
    pre.textContent = `${err.name}: ${err.message}`;
    det.appendChild(pre);
    wrap.appendChild(det);
  }
  container.appendChild(wrap);
}

function isWebglAvailable() {
  const canvas = document.createElement("canvas");
  const opts = { failIfMajorPerformanceCaveat: false };
  try {
    return !!(
      canvas.getContext("webgl2", opts) ||
      canvas.getContext("webgl", opts) ||
      canvas.getContext("experimental-webgl", opts)
    );
  } catch {
    return false;
  }
}

function runGraph(container, dataEl) {
  let payload;
  try {
    payload = JSON.parse(dataEl.textContent.trim());
  } catch (e) {
    console.error("threads-graph: invalid JSON", e);
    showGraphError(
      container,
      "Could not read graph data. Check the page source JSON block.",
      e,
    );
    return;
  }

  const baseurl = typeof payload.baseurl === "string" ? payload.baseurl : "";
  const nodes = Array.isArray(payload.nodes) ? payload.nodes : [];
  const rawEdges = Array.isArray(payload.edges) ? payload.edges : [];

  if (nodes.length === 0) {
    showGraphError(container, "No posts to display in this map.");
    return;
  }

  if (!isWebglAvailable()) {
    showGraphError(
      container,
      "This map needs WebGL, which is disabled or unavailable in this browser. Try another browser or turn off “disable WebGL” / strict privacy modes.",
    );
    return;
  }

  const nodeMeta = new Map();
  for (const n of nodes) {
    if (n && typeof n.id === "string") {
      nodeMeta.set(n.id, {
        title: typeof n.title === "string" ? n.title : "",
        dateDisplay:
          typeof n.dateDisplay === "string" ? n.dateDisplay : "",
        description:
          typeof n.description === "string" ? n.description : "",
      });
    }
  }

  const panel = container.querySelector("#threads-node-panel");
  const titleEl = panel?.querySelector(".summary-title");
  const dateEl = panel?.querySelector(".summary-date");
  const bodyEl = panel?.querySelector(".summary-body");

  function showPanel(nodeId) {
    if (!panel || !titleEl || !dateEl || !bodyEl) return;
    const meta = nodeMeta.get(nodeId);
    if (!meta) return;
    titleEl.textContent = meta.title || "";
    bodyEl.textContent = (meta.description || "").trim();
    if (meta.dateDisplay && meta.dateDisplay.trim()) {
      dateEl.textContent = meta.dateDisplay.trim();
      dateEl.hidden = false;
    } else {
      dateEl.textContent = "";
      dateEl.hidden = true;
    }
    panel.removeAttribute("hidden");
    panel.classList.add("is-visible");
  }

  function hidePanel() {
    if (!panel) return;
    panel.classList.remove("is-visible");
    panel.setAttribute("hidden", "");
  }

  let graph;
  try {
    const sortedAsc = [...nodes].sort((a, b) => {
      const da = String(a.date || "");
      const db = String(b.date || "");
      return da.localeCompare(db);
    });

    const nodeSet = new Set(nodes.map((n) => n.id));
    const posById = layoutTimeBandsQuarterly(sortedAsc);

    graph = new Graph({ type: "directed" });

    for (const node of sortedAsc) {
      const p = posById.get(node.id);
      graph.addNode(node.id, {
        x: p.x,
        y: p.y,
        targetR: p.targetR,
        label: node.title || "",
        size: NODE_DEFAULT_SIZE,
        color: NODE_BASE,
      });
    }

    mergeSavedPositions(graph);

    for (const e of rawEdges) {
      if (!e || typeof e.source !== "string" || typeof e.target !== "string")
        continue;
      if (!nodeSet.has(e.source) || !nodeSet.has(e.target)) continue;
      if (e.source === e.target) continue;
      if (!graph.hasNode(e.source) || !graph.hasNode(e.target)) continue;
      if (graph.hasEdge(e.source, e.target)) continue;

      const kind = e.kind || "related";
      const isPrecursor = kind === "precursor";
      const isConceptual = kind === "conceptual_bridge";
      const edgeType = isPrecursor ? "arrow" : "line";
      let color = EDGE_REL;
      let size = EDGE_SIZE_REL;
      if (isPrecursor) {
        color = EDGE_THREAD;
        size = EDGE_SIZE_THREAD;
      } else if (isConceptual) {
        color = EDGE_CONCEPTUAL;
        size = EDGE_SIZE_CONCEPTUAL;
      }
      try {
        graph.addEdge(e.source, e.target, {
          type: edgeType,
          kind,
          color,
          size,
        });
      } catch (_) {
        /* parallel or invalid */
      }
    }
  } catch (err) {
    console.error("threads-graph: graph build failed", err);
    showGraphError(
      container,
      "Could not build the post graph from the page data.",
      err,
    );
    return;
  }

  const idToSim = new Map();
  const simNodes = [];
  graph.forEachNode((id, a) => {
    const tr =
      typeof a.targetR === "number" && Number.isFinite(a.targetR)
        ? a.targetR
        : 120;
    const o = {
      id,
      x: a.x,
      y: a.y,
      targetR: tr,
    };
    simNodes.push(o);
    idToSim.set(id, o);
  });

  const simLinks = [];
  graph.forEachEdge((_edge, attr, s, t) => {
    const sx = graph.getNodeAttribute(s, "x");
    const sy = graph.getNodeAttribute(s, "y");
    const tx = graph.getNodeAttribute(t, "x");
    const ty = graph.getNodeAttribute(t, "y");
    const d = Math.hypot(tx - sx, ty - sy);
    const kind = attr.kind || "related";
    simLinks.push({
      source: idToSim.get(s),
      target: idToSim.get(t),
      kind,
      baseDist: Math.max(28, d * 0.92),
    });
  });

  function linkIdealDistance(link) {
    const b = link.baseDist;
    if (link.kind === "precursor") return b * 0.72;
    if (link.kind === "conceptual_bridge") return b * 1.22;
    return b;
  }

  function linkStrength(link) {
    if (link.kind === "precursor") return 0.84;
    if (link.kind === "conceptual_bridge") return 0.24;
    return 0.52;
  }

  const simulation = forceSimulation(simNodes)
    .force(
      "link",
      forceLink(simLinks)
        .distance(linkIdealDistance)
        .strength(linkStrength),
    )
    .force("charge", forceManyBody().strength(CHARGE_STRENGTH))
    .force(
      "collide",
      forceCollide()
        .radius(() => COLLIDE_RADIUS)
        .strength(0.92),
    )
    .force(
      "radial",
      forceRadial((d) => d.targetR, 0, 0).strength(RADIAL_STRENGTH),
    )
    .force("edgeRepulse", forceEdgeRepulse(simLinks))
    .alphaTarget(0)
    .stop();

  let pointerInsideContainer = false;
  let dragActive = false;

  let hoverFocus = null;
  let hoverHighlightSet = null;

  function rebuildHighlightSet(nodeId) {
    hoverFocus = nodeId;
    if (!nodeId) {
      hoverHighlightSet = null;
      return;
    }
    const s = new Set([nodeId]);
    graph.forEachNeighbor(nodeId, (n) => {
      s.add(n);
    });
    hoverHighlightSet = s;
  }

  const nodeReducer = (node, data) => {
    const attr = Object.assign({}, data);
    const labelsAllowed = pointerInsideContainer || dragActive;
    attr.label =
      labelsAllowed && data.label ? String(data.label) : null;
    if (!hoverHighlightSet) {
      attr.color = NODE_BASE;
      return attr;
    }
    if (node === hoverFocus) {
      attr.color = NODE_FOCUS;
      attr.size = (data.size || NODE_DEFAULT_SIZE) * 1.12;
      return attr;
    }
    if (hoverHighlightSet.has(node)) {
      attr.color = NODE_NEIGHBOR;
      return attr;
    }
    attr.color = NODE_MUTED;
    return attr;
  };

  function edgeStyleForKind(kind, dimmed) {
    if (kind === "precursor") {
      return {
        color: dimmed ? EDGE_THREAD_DIM : EDGE_THREAD,
        size: EDGE_SIZE_THREAD,
      };
    }
    if (kind === "conceptual_bridge") {
      return {
        color: dimmed ? EDGE_CONCEPTUAL_DIM : EDGE_CONCEPTUAL,
        size: EDGE_SIZE_CONCEPTUAL,
      };
    }
    return {
      color: dimmed ? EDGE_REL_DIM : EDGE_REL,
      size: EDGE_SIZE_REL,
    };
  }

  const edgeReducer = (edge, data) => {
    const attr = Object.assign({}, data);
    const k = data.kind || "related";
    if (!hoverHighlightSet) {
      const st = edgeStyleForKind(k, false);
      attr.color = st.color;
      attr.size = st.size;
      return attr;
    }
    const [s, t] = graph.extremities(edge);
    const incident = hoverHighlightSet.has(s) || hoverHighlightSet.has(t);
    if (incident) {
      const st = edgeStyleForKind(k, false);
      attr.color = st.color;
      attr.size = st.size;
      return attr;
    }
    const st = edgeStyleForKind(k, true);
    attr.color = st.color;
    attr.size = st.size * 0.75;
    return attr;
  };

  let sigma = null;

  let settleRaf = 0;
  let settleDeadline = 0;

  function syncGraphFromSim() {
    for (const n of simNodes) {
      graph.setNodeAttribute(n.id, "x", n.x);
      graph.setNodeAttribute(n.id, "y", n.y);
    }
  }

  function syncSimFromGraph() {
    graph.forEachNode((id, a) => {
      const n = idToSim.get(id);
      if (n) {
        n.x = a.x;
        n.y = a.y;
        n.vx = 0;
        n.vy = 0;
      }
    });
  }

  function cancelSettle() {
    if (settleRaf) {
      cancelAnimationFrame(settleRaf);
      settleRaf = 0;
    }
  }

  /**
   * @param {number} alphaStart
   * @param {number} budgetMs
   * @param {boolean} refitWhenDone
   */
  function runSettle(alphaStart, budgetMs, refitWhenDone) {
    cancelSettle();
    simulation.stop();
    simulation.alpha(alphaStart);
    settleDeadline = performance.now() + budgetMs;

    function settleStep() {
      simulation.tick();
      syncGraphFromSim();
      sigma.refresh();
      if (simulation.alpha() < 0.028 || performance.now() > settleDeadline) {
        simulation.stop();
        settleRaf = 0;
        persistPositions(graph);
        if (refitWhenDone) {
          fitSigmaViewport(sigma, graph);
        }
        return;
      }
      settleRaf = requestAnimationFrame(settleStep);
    }

    settleRaf = requestAnimationFrame(settleStep);
  }

  function startSettleAfterDrag() {
    runSettle(0.42, 800, false);
  }

  let dragNode = null;
  let startVp = { x: 0, y: 0 };
  let lastVp = { x: 0, y: 0 };
  let dragTargetGraph = { x: 0, y: 0 };
  let lerpRaf = 0;

  function stopLerp() {
    if (lerpRaf) {
      cancelAnimationFrame(lerpRaf);
      lerpRaf = 0;
    }
  }

  function lerpStep() {
    if (!dragActive || !dragNode || !sigma) {
      lerpRaf = 0;
      return;
    }
    const sn = idToSim.get(dragNode);
    if (!sn) {
      lerpRaf = 0;
      return;
    }
    const tx = dragTargetGraph.x;
    const ty = dragTargetGraph.y;
    sn.fx = sn.x + (tx - sn.x) * LERP_K;
    sn.fy = sn.y + (ty - sn.y) * LERP_K;
    applyConstellationFollowToward(tx, ty, simNodes, dragNode);
    for (let i = 0; i < DRAG_SIM_TICKS; i++) simulation.tick();
    syncGraphFromSim();
    sigma.refresh();
    lerpRaf = requestAnimationFrame(lerpStep);
  }

  function onGlobalPointerMove(ev) {
    if (dragActive && sigma) {
      lastVp = viewportFromClient(container, ev.clientX, ev.clientY);
      dragTargetGraph = sigma.viewportToGraph(lastVp);
    }
  }

  function onGlobalPointerUp(ev) {
    if (!dragActive) return;
    lastVp = viewportFromClient(container, ev.clientX, ev.clientY);
    const dist = Math.hypot(lastVp.x - startVp.x, lastVp.y - startVp.y);
    dragActive = false;
    stopLerp();
    cancelSettle();
    simulation.stop();

    const openedNode = dragNode;
    dragNode = null;

    for (const n of simNodes) {
      n.fx = null;
      n.fy = null;
    }

    syncSimFromGraph();
    if (openedNode && dist >= CLICK_PX) {
      const sn = idToSim.get(openedNode);
      if (sn) {
        graph.setNodeAttribute(openedNode, "x", dragTargetGraph.x);
        graph.setNodeAttribute(openedNode, "y", dragTargetGraph.y);
        sn.x = dragTargetGraph.x;
        sn.y = dragTargetGraph.y;
        sn.vx = 0;
        sn.vy = 0;
      }
    }

    sigma.getMouseCaptor().enabled = true;
    sigma.refresh();

    if (dist < CLICK_PX) {
      openPostInNewTab(baseurl, openedNode);
      sigma.refresh();
      return;
    }

    rebuildHighlightSet(null);
    hidePanel();
    sigma.refresh();
    startSettleAfterDrag();
  }

  window.addEventListener("pointermove", onGlobalPointerMove);
  window.addEventListener("pointerup", onGlobalPointerUp);
  window.addEventListener("pointercancel", onGlobalPointerUp);

  try {
    sigma = new Sigma(graph, container, {
      renderLabels: true,
      defaultNodeColor: NODE_BASE,
      defaultEdgeColor: EDGE_REL,
      labelDensity: 0.22,
      labelSize: 13,
      labelFont: "Georgia, 'Times New Roman', serif",
      labelWeight: "normal",
      labelRenderer: threadsLightLabelRenderer,
      defaultEdgeType: "line",
      nodeReducer,
      edgeReducer,
    });

    fitSigmaViewport(sigma, graph);
    runSettle(0.78, 1500, true);

    const POINTER_OPTS = { capture: true };

    function onContainerPointerEnter() {
      pointerInsideContainer = true;
      sigma.refresh();
    }

    function onContainerPointerLeave(ev) {
      const rel = ev.relatedTarget;
      if (rel && container.contains(rel)) return;
      pointerInsideContainer = false;
      sigma.refresh();
    }

    container.addEventListener("pointerenter", onContainerPointerEnter, POINTER_OPTS);
    container.addEventListener("pointerleave", onContainerPointerLeave, POINTER_OPTS);

    sigma.on("enterNode", ({ node }) => {
      rebuildHighlightSet(node);
      if (!dragActive) showPanel(node);
      sigma.refresh();
    });

    sigma.on("leaveNode", () => {
      if (dragActive) return;
      rebuildHighlightSet(null);
      hidePanel();
      sigma.refresh();
    });

    sigma.on("downNode", ({ node, event }) => {
      cancelSettle();
      simulation.stop();
      hidePanel();
      syncSimFromGraph();
      dragActive = true;
      dragNode = node;
      startVp = { x: event.x, y: event.y };
      lastVp = { ...startVp };
      sigma.getMouseCaptor().enabled = false;
      dragTargetGraph = sigma.viewportToGraph(startVp);
      stopLerp();
      lerpRaf = requestAnimationFrame(lerpStep);
    });

    sigma.on("kill", () => {
      cancelSettle();
      simulation.stop();
      stopLerp();
      dragActive = false;
      dragNode = null;
      container.removeEventListener(
        "pointerenter",
        onContainerPointerEnter,
        POINTER_OPTS,
      );
      container.removeEventListener(
        "pointerleave",
        onContainerPointerLeave,
        POINTER_OPTS,
      );
      window.removeEventListener("pointermove", onGlobalPointerMove);
      window.removeEventListener("pointerup", onGlobalPointerUp);
      window.removeEventListener("pointercancel", onGlobalPointerUp);
    });

    const ro = new ResizeObserver(() => {
      try {
        sigma.resize();
      } catch (_) {
        /* resize edge case */
      }
    });
    ro.observe(container);
  } catch (err) {
    console.error("threads-graph: Sigma / rendering failed", err);
    window.removeEventListener("pointermove", onGlobalPointerMove);
    window.removeEventListener("pointerup", onGlobalPointerUp);
    window.removeEventListener("pointercancel", onGlobalPointerUp);
    if (sigma && typeof sigma.kill === "function") {
      try {
        sigma.kill();
      } catch (_) {
        /* ignore */
      }
    }
    showGraphError(
      container,
      "The graph viewer could not start. See technical details below or the browser console.",
      err,
    );
  }
}

function startWhenContainerReady() {
  const dataEl = document.getElementById("threads-graph-data");
  const container = document.getElementById("threads-sigma-container");
  if (!dataEl || !container) return;

  let done = false;
  let ro = null;

  const tryRun = () => {
    if (done) return;
    if (container.offsetWidth > 0 && container.offsetHeight > 0) {
      done = true;
      if (ro) ro.disconnect();
      runGraph(container, dataEl);
    }
  };

  requestAnimationFrame(() => {
    requestAnimationFrame(() => {
      tryRun();
      if (done) return;
      ro = new ResizeObserver(() => tryRun());
      ro.observe(container);
      setTimeout(tryRun, 250);
    });
  });
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", startWhenContainerReady);
} else {
  startWhenContainerReady();
}
