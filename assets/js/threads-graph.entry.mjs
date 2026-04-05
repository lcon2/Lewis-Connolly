/**
 * Source for the Threads map. Rebuild bundle: npm install && npm run build:threads-graph
 * (graphology + sigma + d3-force; output: threads-graph.bundle.js)
 */
import Graph from "graphology";
import {
  forceCollide,
  forceLink,
  forceManyBody,
  forceSimulation,
} from "d3-force";
import { Sigma } from "sigma";

const NODE_DEFAULT_SIZE = 12;

const POSITIONS_KEY = "threads-graph-positions-v7";
const CLICK_PX = 6;
/** Lerp toward cursor while dragging (higher = snappier). */
const LERP_K = 0.52;
/** Graph-space collision radius around each node (Sigma coords). */
const COLLIDE_RADIUS = 26;
/** Global repulsion (softer so band shells and links win). */
const CHARGE_STRENGTH = -36;
/** Min radial thickness of each time band (graph units); wider shells = softer time bias. */
const MIN_BAND_SHELL_DR = 64;
/** Visual-only extra width for annulus fill (can exceed shell). */
const MIN_BAND_VISUAL_EXTRA_DR = 16;
/** Push back when outside [rBandMin, rBandMax] — low so thread links dominate. */
const BAND_SHELL_PUSH_OUT = 0.18;
/** Gentle pull toward targetR when inside the shell (time as background bias). */
const BAND_SHELL_CENTER = 0.012;
/** Min distance from non-incident edges (graph units). */
const EDGE_REPULSE_MARGIN = 26;
const EDGE_REPULSE_STRENGTH = 0.11;
/** While dragging: orbit scale around barycenter toward cursor (radians, scaled by influence). */
const DRAG_CONSTELLATION_ORBIT = 0.00095;
/** While dragging: pull non-dragged nodes toward cursor (very small). */
const DRAG_CONSTELLATION_PULL = 0.022;
/**
 * Sigma's LabelGrid caps labels per cell with ceil(settings.labelDensity / ratio²); use a very
 * large value so in-frame bulk labels are not culled by zoom/pan once nodeReducer supplies text.
 */
const LABEL_GRID_DENSITY_NO_CAP = 1e18;
/** Simulation ticks per frame while dragging (higher = snappier separation). */
const DRAG_SIM_TICKS = 9;

const NODE_BASE = "#c9a962";
const NODE_MUTED = "#5c5238";
const NODE_FOCUS = "#e8cf7a";
const NODE_NEIGHBOR = "#d4b86a";

const EDGE_REL = "#6e6e6e";
const EDGE_REL_DIM = "#4a4a4a";
/** Thread — red (kind: thread; legacy kind precursor also accepted) */
const EDGE_THREAD = "#801f22";
const EDGE_THREAD_DIM = "#501015";
/** Conceptual bridge — steel blue */
const EDGE_CONCEPTUAL = "#5f7583";
const EDGE_CONCEPTUAL_DIM = "#3d4a52";

const EDGE_SIZE_REL = 1.2;
const EDGE_SIZE_CONCEPTUAL = 2.3;
const EDGE_SIZE_THREAD = 3.4;

/** Alternating calendar bands: very subtle grey (elegant, barely visible). */
const TIME_BAND_FILL_EVEN = "rgba(200, 200, 210, 0.038)";
const TIME_BAND_STEPS = 72;
/** When false, calendar bands affect layout/forces only; no grey annulus underlay in the UI. */
const DRAW_QUARTERLY_BAND_UNDERLAY = false;

function isThreadEdgeKind(kind) {
  return kind === "thread" || kind === "precursor";
}

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

/** Midpoint edge captions on hover; light fill + outline for readability on the map background. */
function threadsEdgeLabelRenderer(context, edgeData, sourceData, targetData, settings) {
  const label = edgeData.label;
  if (!label) return;
  const size = settings.edgeLabelSize;
  const font = settings.edgeLabelFont;
  const weight = settings.edgeLabelWeight;
  context.font = `${weight} ${size}px ${font}`;
  const textWidth = context.measureText(label).width;
  const cx = (sourceData.x + targetData.x) / 2;
  const cy = (sourceData.y + targetData.y) / 2;
  const dx = targetData.x - sourceData.x;
  const dy = targetData.y - sourceData.y;
  const d = Math.hypot(dx, dy) || 1;
  let angle;
  if (dx > 0) {
    angle = dy > 0 ? Math.acos(dx / d) : Math.asin(dy / d);
  } else if (dy > 0) {
    angle = Math.acos(dx / d) + Math.PI;
  } else {
    angle = Math.asin(dx / d) + Math.PI / 2;
  }
  const yOff = edgeData.size / 2 + size;
  context.save();
  context.translate(cx, cy);
  context.rotate(angle);
  context.lineWidth = 3;
  context.strokeStyle = "rgba(12, 12, 14, 0.92)";
  context.lineJoin = "round";
  context.strokeText(label, -textWidth / 2, yOff);
  context.fillStyle = "#e8e8e8";
  context.fillText(label, -textWidth / 2, yOff);
  context.restore();
}

function parsePostDateMs(iso) {
  const t = Date.parse(String(iso || ""));
  return Number.isFinite(t) ? t : NaN;
}

/** Wider graph when many posts so the full-site map stays legible. */
function radialExtentForPostCount(nodeCount) {
  const rMin = 48;
  const n = Math.max(1, nodeCount);
  const rMax = Math.min(560, 240 + Math.sqrt(n) * 26);
  return { rMin, rMax };
}

/** Discrete target radius per band index (same as layout / underlay). */
function buildTargetRArray(model) {
  const R = [];
  for (let b = 0; b <= model.maxBand; b++) {
    R.push(model.targetRForBand(b));
  }
  return R;
}

/**
 * Radial shell for band b in graph space; widened to at least minDr thick.
 */
function annulusForBand(b, R, maxBand, minDr) {
  let lo = b === 0 ? 0 : (R[b - 1] + R[b]) / 2;
  let hi =
    b === maxBand
      ? R[b] +
        Math.max(32, maxBand > 0 ? (R[b] - R[b - 1]) / 2 : 36)
      : (R[b] + R[b + 1]) / 2;
  const w = hi - lo;
  if (w < minDr) {
    const pad = (minDr - w) / 2;
    lo = Math.max(0, lo - pad);
    hi = hi + pad;
  }
  return { lo, hi };
}

/** Soft radial bias: loose shells + gentle drift toward targetR (subordinate to link forces). */
function forceBandShell() {
  let nodes;
  function force(alpha) {
    const kOut = BAND_SHELL_PUSH_OUT * alpha;
    const kIn = BAND_SHELL_CENTER * alpha;
    for (let i = 0; i < nodes.length; i++) {
      const node = nodes[i];
      const lo = node.rBandMin;
      const hi = node.rBandMax;
      const tr = node.targetR;
      if (
        typeof lo !== "number" ||
        typeof hi !== "number" ||
        !Number.isFinite(lo) ||
        !Number.isFinite(hi)
      ) {
        continue;
      }
      const r = Math.hypot(node.x, node.y) || 1e-6;
      const ux = node.x / r;
      const uy = node.y / r;
      if (r < lo) {
        const k = (lo - r) * kOut;
        node.vx += ux * k;
        node.vy += uy * k;
      } else if (r > hi) {
        const k = (r - hi) * kOut;
        node.vx -= ux * k;
        node.vy -= uy * k;
      } else if (typeof tr === "number" && Number.isFinite(tr)) {
        const k = (tr - r) * kIn;
        node.vx += ux * k;
        node.vy += uy * k;
      }
    }
  }
  force.initialize = (_) => {
    nodes = _;
  };
  return force;
}

/**
 * Ideal link length from band geometry (chord at target radii + current angles).
 */
function linkBaseDistanceFromChord(sa, ta, kind) {
  const ra =
    typeof sa.targetR === "number" && Number.isFinite(sa.targetR)
      ? sa.targetR
      : Math.hypot(sa.x, sa.y) || 1;
  const rb =
    typeof ta.targetR === "number" && Number.isFinite(ta.targetR)
      ? ta.targetR
      : Math.hypot(ta.x, ta.y) || 1;
  const angA = Math.atan2(sa.y, sa.x);
  const angB = Math.atan2(ta.y, ta.x);
  const ax = ra * Math.cos(angA);
  const ay = ra * Math.sin(angA);
  const bx = rb * Math.cos(angB);
  const by = rb * Math.sin(angB);
  const chord = Math.hypot(bx - ax, by - ay);
  if (isThreadEdgeKind(kind)) {
    return Math.max(32, chord * 0.38);
  }
  if (kind === "conceptual_bridge") {
    return Math.max(48, chord * 0.62);
  }
  return Math.max(40, chord * 0.52);
}

/** Sort key → period start (UTC ms) for stable chronological band ordering. */
function periodStartMsFromBandKey(key) {
  const mY = key.match(/^(\d{4})-year$/);
  if (mY) return Date.UTC(Number(mY[1]), 0, 1);
  const mH = key.match(/^(\d{4})-H([12])$/);
  if (mH) {
    const y = Number(mH[1]);
    return mH[2] === "1" ? Date.UTC(y, 0, 1) : Date.UTC(y, 6, 1);
  }
  const mQ = key.match(/^(\d{4})-Q([1-4])$/);
  if (mQ) {
    const y = Number(mQ[1]);
    const qi = Number(mQ[2]) - 1;
    return Date.UTC(y, qi * 3, 1);
  }
  return 0;
}

/**
 * Calendar band for a post date: yearly through 2020, half-yearly 2021–2024, quarterly from 2025.
 */
function calendarBandKeyFromUtcMs(t) {
  const d = new Date(t);
  const y = d.getUTCFullYear();
  const m = d.getUTCMonth();
  if (y <= 2020) {
    return `${y}-year`;
  }
  if (y <= 2024) {
    const h = m < 6 ? 1 : 2;
    return `${y}-H${h}`;
  }
  const q = Math.floor(m / 3) + 1;
  return `${y}-Q${q}`;
}

/**
 * Shared calendar time model for layout + band underlay (keep in sync).
 * @returns {{ dateMode: true, bandById: Map, maxBand: number, rMin: number, rMax: number, targetRForBand: (b:number)=>number } | { dateMode: false, n: number, rMin: number, rMax: number, sortedAsc: object[] }}
 */
function buildQuarterlyTimeModel(sortedAsc) {
  const n = sortedAsc.length;
  const { rMin, rMax } = radialExtentForPostCount(n);
  if (n === 0) {
    return { dateMode: true, bandById: new Map(), maxBand: 0, rMin, rMax, targetRForBand: () => rMin };
  }
  if (n === 1) {
    return {
      dateMode: true,
      bandById: new Map([[sortedAsc[0].id, 0]]),
      maxBand: 0,
      rMin,
      rMax,
      targetRForBand: () => rMin,
    };
  }

  const dated = sortedAsc.map((node) => ({
    node,
    t: parsePostDateMs(node.date),
  }));
  const finite = dated.filter((d) => !Number.isNaN(d.t));

  if (finite.length === 0) {
    const ext = radialExtentForPostCount(n);
    return { dateMode: false, n, rMin: ext.rMin, rMax: ext.rMax, sortedAsc };
  }

  const keySet = new Set();
  for (const { t } of finite) {
    keySet.add(calendarBandKeyFromUtcMs(t));
  }
  const sortedKeys = [...keySet].sort(
    (a, b) => periodStartMsFromBandKey(a) - periodStartMsFromBandKey(b),
  );
  const keyToBand = new Map();
  for (let i = 0; i < sortedKeys.length; i++) {
    keyToBand.set(sortedKeys[i], i);
  }
  const maxBand = sortedKeys.length - 1;

  const bandById = new Map();
  for (const { node, t } of dated) {
    if (Number.isNaN(t)) {
      bandById.set(node.id, maxBand);
    } else {
      const k = calendarBandKeyFromUtcMs(t);
      bandById.set(node.id, keyToBand.get(k) ?? maxBand);
    }
  }

  function targetRForBand(band) {
    if (maxBand === 0) return rMin;
    return rMin + (band / maxBand) * (rMax - rMin);
  }

  return { dateMode: true, bandById, maxBand, rMin, rMax, targetRForBand };
}

/**
 * Calendar time bands (year / half-year / quarter by era): older bands smaller targetR, newer larger.
 * Returns map id -> { x, y, targetR } for initial placement and radial force.
 */
function layoutTimeBandsQuarterly(sortedAsc) {
  const positions = new Map();
  const n = sortedAsc.length;
  if (n === 0) return positions;
  const model = buildQuarterlyTimeModel(sortedAsc);
  const rMin = model.rMin;
  const rMax = model.rMax;

  if (!model.dateMode) {
    sortedAsc.forEach((node, rank) => {
      const t = rank / (n - 1);
      const r = rMin + t * (rMax - rMin);
      const angle = (2 * Math.PI * rank) / n - Math.PI / 2;
      const half = Math.max(16, r * 0.07);
      positions.set(node.id, {
        x: Math.cos(angle) * r,
        y: Math.sin(angle) * r,
        targetR: r,
        rBandMin: Math.max(0, r - half),
        rBandMax: r + half,
      });
    });
    return positions;
  }

  if (n === 1) {
    const half = Math.max(20, rMin * 0.35);
    positions.set(sortedAsc[0].id, {
      x: 0,
      y: 0,
      targetR: rMin,
      rBandMin: Math.max(0, rMin - half),
      rBandMax: rMin + half,
    });
    return positions;
  }

  const { bandById, targetRForBand, maxBand } = model;
  const R = buildTargetRArray(model);
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
    const { lo, hi } = annulusForBand(b, R, maxBand, MIN_BAND_SHELL_DR);
    const k = group.length;
    for (let j = 0; j < k; j++) {
      const node = group[j];
      const theta = ((2 * Math.PI * j) / k || 0) + bandPhase;
      positions.set(node.id, {
        x: Math.cos(theta) * tr,
        y: Math.sin(theta) * tr,
        targetR: tr,
        rBandMin: lo,
        rBandMax: hi,
      });
    }
    bandPhase += Math.PI / 7;
  }

  return positions;
}

/**
 * @param {*} sigma
 * @param {CanvasRenderingContext2D} ctx
 * @param {object[]} sortedAsc
 * @param {number} cssW
 * @param {number} cssH
 */
function drawQuarterlyBandUnderlay(sigma, ctx, sortedAsc, cssW, cssH) {
  ctx.clearRect(0, 0, cssW, cssH);

  const model = buildQuarterlyTimeModel(sortedAsc);
  if (!model.dateMode) return;

  const { maxBand } = model;
  const R = buildTargetRArray(model);
  const visualMinDr = MIN_BAND_SHELL_DR + MIN_BAND_VISUAL_EXTRA_DR;

  const steps = TIME_BAND_STEPS;
  for (let b = 0; b <= maxBand; b++) {
    if (b % 2 !== 0) continue;
    let { lo: rLo, hi: rHi } = annulusForBand(b, R, maxBand, visualMinDr);
    if (rHi <= rLo + 2) continue;

    ctx.beginPath();
    for (let i = 0; i <= steps; i++) {
      const ang = (i / steps) * 2 * Math.PI;
      const p = sigma.graphToViewport({
        x: Math.cos(ang) * rHi,
        y: Math.sin(ang) * rHi,
      });
      if (i === 0) ctx.moveTo(p.x, p.y);
      else ctx.lineTo(p.x, p.y);
    }
    for (let i = steps; i >= 0; i--) {
      const ang = (i / steps) * 2 * Math.PI;
      const p = sigma.graphToViewport({
        x: Math.cos(ang) * rLo,
        y: Math.sin(ang) * rLo,
      });
      ctx.lineTo(p.x, p.y);
    }
    ctx.closePath();
    ctx.fillStyle = TIME_BAND_FILL_EVEN;
    ctx.fill();
  }
}

/**
 * @param {HTMLElement} container
 * @param {*} sigma
 * @param {object[]} sortedAsc
 */
function attachQuarterlyBandUnderlay(container, sigma, sortedAsc) {
  const canvas = document.createElement("canvas");
  canvas.className = "threads-time-bands-canvas";
  canvas.setAttribute("aria-hidden", "true");
  container.prepend(canvas);

  const dpr = window.devicePixelRatio || 1;

  function redraw() {
    const r = container.getBoundingClientRect();
    const cssW = Math.max(1, r.width);
    const cssH = Math.max(1, r.height);
    canvas.width = Math.max(1, Math.floor(cssW * dpr));
    canvas.height = Math.max(1, Math.floor(cssH * dpr));
    canvas.style.width = `${cssW}px`;
    canvas.style.height = `${cssH}px`;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    drawQuarterlyBandUnderlay(sigma, ctx, sortedAsc, cssW, cssH);
  }

  redraw();

  const cam = sigma.getCamera();
  const onCam = () => redraw();
  cam.on("updated", onCam);

  const ro = new ResizeObserver(() => {
    try {
      redraw();
    } catch (_) {
      /* ignore */
    }
  });
  ro.observe(container);

  return {
    redraw,
    teardown: () => {
      cam.removeListener("updated", onCam);
      ro.disconnect();
      canvas.remove();
    },
  };
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

function fitSigmaViewport(sigma, graph, padding, nodeCount) {
  const n = typeof nodeCount === "number" && nodeCount > 0 ? nodeCount : 24;
  const pad =
    typeof padding === "number"
      ? padding
      : 96 + Math.min(88, Math.max(0, n - 18) * 1.05);
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
    x: [minX - pad, maxX + pad],
    y: [minY - pad, maxY + pad],
  });
  const ratio = n > 72 ? 1.14 : n > 42 ? 1.08 : n > 28 ? 1.04 : 1;
  sigma.getCamera().setState({ x: 0.5, y: 0.5, ratio, angle: 0 });
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

/** Fullscreen the graph container; Esc or a second click exits (native + button toggle). */
function attachThreadsFullscreen(container) {
  const btn = container.querySelector("#threads-fullscreen-btn");
  if (!btn) return;

  const doc = document;

  function fullscreenElement() {
    return doc.fullscreenElement || doc.webkitFullscreenElement || null;
  }

  function updateBtn() {
    const on = fullscreenElement() === container;
    btn.setAttribute("aria-pressed", on ? "true" : "false");
    btn.setAttribute(
      "aria-label",
      on ? "Exit full screen" : "Enter full screen",
    );
    btn.title = on ? "Exit full screen (Esc)" : "Full screen (Esc to exit)";
  }

  async function toggle() {
    try {
      if (fullscreenElement() === container) {
        if (doc.exitFullscreen) await doc.exitFullscreen();
        else if (doc.webkitExitFullscreen) await doc.webkitExitFullscreen();
      } else if (container.requestFullscreen) {
        await container.requestFullscreen();
      } else if (container.webkitRequestFullscreen) {
        await container.webkitRequestFullscreen();
      }
    } catch {
      /* unsupported, denied, or not a user gesture */
    }
  }

  btn.addEventListener("click", () => {
    void toggle();
  });

  doc.addEventListener("fullscreenchange", updateBtn);
  doc.addEventListener("webkitfullscreenchange", updateBtn);
  updateBtn();
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

  const graphNodeCount = nodes.length;

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
  /** Chronological order; kept in runGraph scope for band underlay after graph build. */
  let sortedAsc = [];
  try {
    sortedAsc = [...nodes].sort((a, b) => {
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
        rBandMin: p.rBandMin,
        rBandMax: p.rBandMax,
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
      const isThread = isThreadEdgeKind(kind);
      const isConceptual = kind === "conceptual_bridge";
      const edgeType = isThread ? "arrow" : "line";
      let color = EDGE_REL;
      let size = EDGE_SIZE_REL;
      if (isThread) {
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
    const r0 = Math.hypot(a.x, a.y) || tr;
    const lo =
      typeof a.rBandMin === "number" && Number.isFinite(a.rBandMin)
        ? a.rBandMin
        : Math.max(0, r0 - 28);
    const hi =
      typeof a.rBandMax === "number" && Number.isFinite(a.rBandMax)
        ? a.rBandMax
        : r0 + 28;
    const o = {
      id,
      x: a.x,
      y: a.y,
      targetR: tr,
      rBandMin: lo,
      rBandMax: hi,
    };
    simNodes.push(o);
    idToSim.set(id, o);
  });

  const simLinks = [];
  graph.forEachEdge((_edge, attr, s, t) => {
    const kind = attr.kind || "related";
    const sa = idToSim.get(s);
    const ta = idToSim.get(t);
    if (!sa || !ta) return;
    simLinks.push({
      source: sa,
      target: ta,
      kind,
      baseDist: linkBaseDistanceFromChord(sa, ta, kind),
    });
  });

  function linkIdealDistance(link) {
    return link.baseDist;
  }

  function linkStrength(link) {
    if (isThreadEdgeKind(link.kind)) return 0.9;
    if (link.kind === "conceptual_bridge") return 0.28;
    return 0.42;
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
        .strength(0.9),
    )
    .force("bandShell", forceBandShell())
    .force("edgeRepulse", forceEdgeRepulse(simLinks))
    .alphaTarget(0)
    .stop();

  let dragActive = false;

  let hoverFocus = null;
  let hoverHighlightSet = null;

  /** When true, show all node titles while the pointer is inside the graph frame (no hover). */
  let labelsBulkEnabled = true;

  /** Set after Sigma exists; nodeReducer reads for frame-gated labels. */
  let sigmaRef = null;
  let pointerInsideContainer = false;

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
    /** Hover: only focus + edge-neighbors titled. Idle: all titles only if toggle ON and pointer inside frame. */
    const inHighlight =
      hoverHighlightSet && hoverHighlightSet.has(node);
    const idleAllInFrame =
      !hoverHighlightSet &&
      pointerInsideContainer &&
      labelsBulkEnabled;
    const showTitle =
      !dragActive &&
      data.label &&
      (inHighlight || idleAllInFrame);
    attr.label = showTitle ? String(data.label) : null;
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
    if (isThreadEdgeKind(kind)) {
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
      attr.label = "";
      return attr;
    }
    const [s, t] = graph.extremities(edge);
    const incident = hoverHighlightSet.has(s) || hoverHighlightSet.has(t);
    if (incident) {
      const st = edgeStyleForKind(k, false);
      attr.color = st.color;
      attr.size = st.size * 1.5;
      if (isThreadEdgeKind(k)) {
        attr.label = "Direct Thread";
      } else if (k === "conceptual_bridge") {
        attr.label = "Conceptual Bridge";
      } else {
        attr.label = "";
      }
      return attr;
    }
    const st = edgeStyleForKind(k, true);
    attr.color = st.color;
    attr.size = st.size * 0.75;
    attr.label = "";
    return attr;
  };

  let sigma = null;
  /** @type {{ redraw: () => void, teardown: () => void } | null} */
  let bandUnderlay = null;

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
          fitSigmaViewport(sigma, graph, undefined, graphNodeCount);
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

  function syncPointerInsideGraphFrame(clientX, clientY) {
    if (!sigma) return;
    const r = container.getBoundingClientRect();
    const inside =
      clientX >= r.left &&
      clientX < r.right &&
      clientY >= r.top &&
      clientY < r.bottom;
    if (inside !== pointerInsideContainer) {
      pointerInsideContainer = inside;
      try {
        sigma.refresh();
      } catch {
        /* ignore */
      }
    }
  }

  function onGlobalPointerMove(ev) {
    syncPointerInsideGraphFrame(ev.clientX, ev.clientY);
    if (dragActive && sigma) {
      lastVp = viewportFromClient(container, ev.clientX, ev.clientY);
      dragTargetGraph = sigma.viewportToGraph(lastVp);
    }
  }

  function onGlobalPointerUp(ev) {
    syncPointerInsideGraphFrame(ev.clientX, ev.clientY);
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
      renderEdgeLabels: true,
      defaultNodeColor: NODE_BASE,
      defaultEdgeColor: EDGE_REL,
      labelDensity: LABEL_GRID_DENSITY_NO_CAP,
      labelSize: 13,
      labelFont: "Georgia, 'Times New Roman', serif",
      labelWeight: "normal",
      labelRenderer: threadsLightLabelRenderer,
      edgeLabelSize: 11,
      edgeLabelFont: "Georgia, 'Times New Roman', serif",
      edgeLabelWeight: "normal",
      edgeLabelRenderer: threadsEdgeLabelRenderer,
      defaultEdgeType: "line",
      nodeReducer,
      edgeReducer,
    });
    sigmaRef = sigma;

    const assetRoot =
      typeof baseurl === "string" && baseurl.length > 0
        ? baseurl.replace(/\/$/, "")
        : "";
    const labelToggleOnSrc = `${assetRoot}/assets/images/threads-label-toggle-on.svg`;
    const labelToggleOffSrc = `${assetRoot}/assets/images/threads-label-toggle-off.svg`;

    const labelToggleBtn = document.createElement("button");
    labelToggleBtn.type = "button";
    labelToggleBtn.className = "threads-label-toggle-btn";
    labelToggleBtn.id = "threads-label-toggle-btn";
    labelToggleBtn.setAttribute("aria-pressed", "true");
    labelToggleBtn.setAttribute(
      "aria-label",
      "Default titles on map when the pointer is over the graph: on. Click to toggle.",
    );
    const labelToggleImg = document.createElement("img");
    labelToggleImg.alt = "";
    labelToggleImg.width = 33;
    labelToggleImg.height = 33;
    labelToggleImg.decoding = "async";
    labelToggleImg.src = labelToggleOnSrc;

    function syncLabelToggleUi() {
      labelToggleBtn.setAttribute(
        "aria-pressed",
        labelsBulkEnabled ? "true" : "false",
      );
      labelToggleImg.src = labelsBulkEnabled
        ? labelToggleOnSrc
        : labelToggleOffSrc;
      labelToggleBtn.title = labelsBulkEnabled
        ? "Default titles in frame: on (click to hide until hover)"
        : "Default titles in frame: off (click to show when pointer is over map)";
    }
    syncLabelToggleUi();

    labelToggleBtn.appendChild(labelToggleImg);
    container.appendChild(labelToggleBtn);

    labelToggleBtn.addEventListener("click", () => {
      labelsBulkEnabled = !labelsBulkEnabled;
      syncLabelToggleUi();
      try {
        sigma.refresh();
      } catch {
        /* ignore */
      }
    });

    function applyLabelGridNoCap() {
      sigma.settings.labelDensity = LABEL_GRID_DENSITY_NO_CAP;
    }

    if (DRAW_QUARTERLY_BAND_UNDERLAY) {
      bandUnderlay = attachQuarterlyBandUnderlay(container, sigma, sortedAsc);
    }

    fitSigmaViewport(sigma, graph, undefined, graphNodeCount);
    applyLabelGridNoCap();

    let labelRefreshRaf = 0;
    function requestLabelRefreshFromCamera() {
      if (labelRefreshRaf) return;
      labelRefreshRaf = requestAnimationFrame(() => {
        labelRefreshRaf = 0;
        try {
          applyLabelGridNoCap();
          sigma.refresh();
        } catch {
          /* ignore */
        }
      });
    }
    const camForLabels = sigma.getCamera();
    camForLabels.on("updated", requestLabelRefreshFromCamera);

    runSettle(0.78, 1500, true);

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
      const lt = container.querySelector("#threads-label-toggle-btn");
      if (lt) lt.remove();
      if (labelRefreshRaf) {
        cancelAnimationFrame(labelRefreshRaf);
        labelRefreshRaf = 0;
      }
      camForLabels.removeListener("updated", requestLabelRefreshFromCamera);
      sigmaRef = null;
      if (bandUnderlay) {
        bandUnderlay.teardown();
        bandUnderlay = null;
      }
      cancelSettle();
      simulation.stop();
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
      attachThreadsFullscreen(container);
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
