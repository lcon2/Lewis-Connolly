/**
 * Source for the Threads map. Rebuild bundle: npm install && npm run build:threads-graph
 * (graphology + sigma from npm; output: threads-graph.bundle.js)
 */
import Graph from "graphology";
import { Sigma } from "sigma";

const POSITIONS_KEY = "threads-graph-positions";
const CLICK_PX = 6;
const LERP_K = 0.45;

const NODE_BASE = "#c9a962";
const NODE_MUTED = "#5c5238";
const NODE_FOCUS = "#e8cf7a";
const NODE_NEIGHBOR = "#d4b86a";

const EDGE_REL = "#6e6e6e";
const EDGE_REL_DIM = "#4a4a4a";
const EDGE_THREAD = "#5f7583";
const EDGE_THREAD_DIM = "#3d4a52";

const EDGE_SIZE_REL = 1.2;
const EDGE_SIZE_THREAD = 3.4;

function threadsLightLabelRenderer(context, data, settings) {
  if (!data.label) return;
  const size = settings.labelSize;
  const font = settings.labelFont;
  const weight = settings.labelWeight;
  context.fillStyle = "#e8e8e8";
  context.font = `${weight} ${size}px ${font}`;
  context.fillText(data.label, data.x + data.size + 3, data.y + size / 3);
}

/** Oldest posts near center, newest toward the outer ring. */
function layoutRadialByDate(sortedAsc) {
  const n = sortedAsc.length;
  const rMin = 48;
  const rMax = 240;
  const positions = new Map();
  if (n === 0) return positions;
  if (n === 1) {
    positions.set(sortedAsc[0].id, { x: 0, y: 0 });
    return positions;
  }
  sortedAsc.forEach((node, rank) => {
    const t = rank / (n - 1);
    const r = rMin + t * (rMax - rMin);
    const angle = (2 * Math.PI * rank) / n - Math.PI / 2;
    positions.set(node.id, {
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r,
    });
  });
  return positions;
}

function fitSigmaViewport(sigma, graph, padding = 72) {
  let minX = Infinity;
  let maxX = -Infinity;
  let minY = Infinity;
  let maxY = -Infinity;
  graph.forEachNode((_id, a) => {
    const sz = a.size || 10;
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
    const posById = layoutRadialByDate(sortedAsc);

    graph = new Graph({ type: "directed" });

    for (const node of sortedAsc) {
      const p = posById.get(node.id);
      graph.addNode(node.id, {
        x: p.x,
        y: p.y,
        label: node.title || "",
        size: 10,
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
      const edgeType = kind === "precursor" ? "arrow" : "line";
      const isThread = kind === "precursor";
      try {
        graph.addEdge(e.source, e.target, {
          type: edgeType,
          kind,
          color: isThread ? EDGE_THREAD : EDGE_REL,
          size: isThread ? EDGE_SIZE_THREAD : EDGE_SIZE_REL,
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
    if (!hoverHighlightSet) {
      attr.color = NODE_BASE;
      return attr;
    }
    if (node === hoverFocus) {
      attr.color = NODE_FOCUS;
      attr.size = (data.size || 10) * 1.12;
      return attr;
    }
    if (hoverHighlightSet.has(node)) {
      attr.color = NODE_NEIGHBOR;
      return attr;
    }
    attr.color = NODE_MUTED;
    return attr;
  };

  const edgeReducer = (edge, data) => {
    const attr = Object.assign({}, data);
    if (!hoverHighlightSet) {
      const k = data.kind === "precursor" ? "precursor" : "related";
      attr.color = k === "precursor" ? EDGE_THREAD : EDGE_REL;
      attr.size = k === "precursor" ? EDGE_SIZE_THREAD : EDGE_SIZE_REL;
      return attr;
    }
    const [s, t] = graph.extremities(edge);
    const incident = hoverHighlightSet.has(s) || hoverHighlightSet.has(t);
    const isThread = data.kind === "precursor";
    if (incident) {
      attr.color = isThread ? EDGE_THREAD : EDGE_REL;
      attr.size = isThread ? EDGE_SIZE_THREAD : EDGE_SIZE_REL;
      return attr;
    }
    attr.color = isThread ? EDGE_THREAD_DIM : EDGE_REL_DIM;
    attr.size = (isThread ? EDGE_SIZE_THREAD : EDGE_SIZE_REL) * 0.75;
    return attr;
  };

  let sigma = null;

  let dragActive = false;
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
    const x = graph.getNodeAttribute(dragNode, "x");
    const y = graph.getNodeAttribute(dragNode, "y");
    const tx = dragTargetGraph.x;
    const ty = dragTargetGraph.y;
    const nx = x + (tx - x) * LERP_K;
    const ny = y + (ty - y) * LERP_K;
    graph.setNodeAttribute(dragNode, "x", nx);
    graph.setNodeAttribute(dragNode, "y", ny);
    sigma.refresh();
    lerpRaf = requestAnimationFrame(lerpStep);
  }

  function onGlobalPointerMove(ev) {
    if (!dragActive) return;
    lastVp = viewportFromClient(container, ev.clientX, ev.clientY);
    dragTargetGraph = sigma.viewportToGraph(lastVp);
  }

  function onGlobalPointerUp(ev) {
    if (!dragActive) return;
    lastVp = viewportFromClient(container, ev.clientX, ev.clientY);
    const dist = Math.hypot(lastVp.x - startVp.x, lastVp.y - startVp.y);
    dragActive = false;
    stopLerp();
    graph.setNodeAttribute(dragNode, "x", dragTargetGraph.x);
    graph.setNodeAttribute(dragNode, "y", dragTargetGraph.y);
    sigma.getMouseCaptor().enabled = true;
    sigma.refresh();
    const openedNode = dragNode;
    dragNode = null;
    if (dist < CLICK_PX) {
      openPostInNewTab(baseurl, openedNode);
    } else {
      persistPositions(graph);
      rebuildHighlightSet(null);
      hidePanel();
      sigma.refresh();
    }
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

    sigma.on("enterNode", ({ node }) => {
      rebuildHighlightSet(node);
      showPanel(node);
      sigma.refresh();
    });

    sigma.on("leaveNode", () => {
      if (dragActive) return;
      rebuildHighlightSet(null);
      hidePanel();
      sigma.refresh();
    });

    sigma.on("downNode", ({ node, event }) => {
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
      stopLerp();
      dragActive = false;
      dragNode = null;
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
