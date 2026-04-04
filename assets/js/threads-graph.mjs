/**
 * Pinned CDN: graphology@0.25.4, sigma@2.0.0 (no ForceAtlas2; radial layout by date).
 */
import Graph from "https://esm.sh/graphology@0.25.4";
import Sigma from "https://esm.sh/sigma@2.0.0";

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

function showGraphError(container, message) {
  const p = document.createElement("p");
  p.className = "threads-graph-error";
  p.setAttribute("role", "alert");
  p.textContent = message;
  container.appendChild(p);
}

function runGraph(container, dataEl) {
  let payload;
  try {
    payload = JSON.parse(dataEl.textContent.trim());
  } catch (e) {
    console.error("threads-graph: invalid JSON", e);
    showGraphError(container, "Could not read graph data. Check the page source JSON block.");
    return;
  }

  const baseurl = typeof payload.baseurl === "string" ? payload.baseurl : "";
  const nodes = Array.isArray(payload.nodes) ? payload.nodes : [];
  const rawEdges = Array.isArray(payload.edges) ? payload.edges : [];

  if (nodes.length === 0) {
    showGraphError(container, "No posts to display in this map.");
    return;
  }

  let sigma = null;

  try {
    const sortedAsc = [...nodes].sort((a, b) => {
      const da = String(a.date || "");
      const db = String(b.date || "");
      return da.localeCompare(db);
    });

    const nodeSet = new Set(nodes.map((n) => n.id));
    const posById = layoutRadialByDate(sortedAsc);

    const graph = new Graph({ type: "directed" });

    for (const node of sortedAsc) {
      const p = posById.get(node.id);
      graph.addNode(node.id, {
        x: p.x,
        y: p.y,
        label: node.title || "",
        size: 10,
        color: "#c9a962",
      });
    }

    for (const e of rawEdges) {
      if (!e || typeof e.source !== "string" || typeof e.target !== "string") continue;
      if (!nodeSet.has(e.source) || !nodeSet.has(e.target)) continue;
      if (e.source === e.target) continue;
      if (!graph.hasNode(e.source) || !graph.hasNode(e.target)) continue;
      if (graph.hasEdge(e.source, e.target)) continue;

      const kind = e.kind || "related";
      const edgeType = kind === "precursor" ? "arrow" : "line";
      try {
        graph.addEdge(e.source, e.target, { type: edgeType, kind });
      } catch (_) {
        /* parallel or invalid */
      }
    }

    sigma = new Sigma(graph, container, {
      renderLabels: true,
      defaultNodeColor: "#c9a962",
      defaultEdgeColor: "#6e6e6e",
      labelDensity: 0.22,
      labelSize: 13,
      labelFont: "Georgia, 'Times New Roman', serif",
      labelWeight: "normal",
      labelRenderer: threadsLightLabelRenderer,
      defaultEdgeType: "line",
    });

    fitSigmaViewport(sigma, graph);

    sigma.on("clickNode", ({ node }) => {
      window.location.href = baseurl + node;
    });

    const ro = new ResizeObserver(() => {
      try {
        sigma.resize();
        fitSigmaViewport(sigma, graph);
      } catch (_) {
        /* resize edge case */
      }
    });
    ro.observe(container);
  } catch (err) {
    console.error("threads-graph:", err);
    if (sigma && typeof sigma.kill === "function") {
      try {
        sigma.kill();
      } catch (_) {
        /* ignore */
      }
    }
    showGraphError(
      container,
      "The graph could not start (WebGL, layout, or script loading). Try another browser or check the developer console.",
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
