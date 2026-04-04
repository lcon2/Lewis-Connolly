/**
 * Pinned CDN versions: graphology@0.25.4, graphology-layout-forceatlas2@0.10.1, sigma@2.0.0
 */
import Graph from "https://esm.sh/graphology@0.25.4";
import forceAtlas2 from "https://esm.sh/graphology-layout-forceatlas2@0.10.1";
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

function init() {
  const dataEl = document.getElementById("threads-graph-data");
  const container = document.getElementById("threads-sigma-container");
  if (!dataEl || !container) return;

  let payload;
  try {
    payload = JSON.parse(dataEl.textContent.trim());
  } catch (e) {
    console.error("threads-graph: invalid JSON", e);
    return;
  }

  const baseurl = typeof payload.baseurl === "string" ? payload.baseurl : "";
  const nodes = Array.isArray(payload.nodes) ? payload.nodes : [];
  const rawEdges = Array.isArray(payload.edges) ? payload.edges : [];

  if (nodes.length === 0) return;

  const nodeSet = new Set(nodes.map((n) => n.id));
  const graph = new Graph({ type: "undirected" });

  const n = nodes.length;
  nodes.forEach((node, i) => {
    const angle = (2 * Math.PI * i) / n;
    const r = 100;
    graph.addNode(node.id, {
      x: Math.cos(angle) * r,
      y: Math.sin(angle) * r,
      label: node.title || "",
      size: 10,
      color: "#c9a962",
    });
  });

  for (const e of rawEdges) {
    if (!e || typeof e.source !== "string" || typeof e.target !== "string") continue;
    if (!nodeSet.has(e.source) || !nodeSet.has(e.target)) continue;
    if (e.source === e.target) continue;
    if (!graph.hasNode(e.source) || !graph.hasNode(e.target)) continue;
    if (graph.areNeighbors(e.source, e.target)) continue;
    try {
      graph.addEdge(e.source, e.target, { kind: e.kind || "related" });
    } catch (_) {
      /* duplicate or invalid edge */
    }
  }

  try {
    forceAtlas2.assign(graph, {
      iterations: 120,
      settings: {
        gravity: 1.2,
        scalingRatio: 5,
      },
    });
  } catch (e) {
    console.error("threads-graph: layout failed", e);
  }

  const sigma = new Sigma(graph, container, {
    renderLabels: true,
    defaultNodeColor: "#c9a962",
    defaultEdgeColor: "#5a5a5a",
    labelDensity: 0.2,
    labelSize: 13,
    labelFont: "Georgia, 'Times New Roman', serif",
    labelWeight: "normal",
    labelRenderer: threadsLightLabelRenderer,
  });

  sigma.on("clickNode", ({ node }) => {
    const path = node;
    window.location.href = baseurl + path;
  });

  sigma.refresh();
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
