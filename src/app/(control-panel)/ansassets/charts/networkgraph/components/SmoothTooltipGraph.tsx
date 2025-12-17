"use client";

import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type GraphNode = {
  id: string | number;
  label: string;
  group?: string;
  time?: string | number;
};

type GraphEdge = {
  from: string | number;
  to: string | number;
  label?: string;
  color?: string;
};

type Props = { data: { nodes: GraphNode[]; links: GraphEdge[] } | null };

type Tooltip = { x: number; y: number; content: string } | null;

export default function SmoothTooltipGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<Network | null>(null);
  const [tooltip, setTooltip] = useState<Tooltip>(null);

  useEffect(() => {
    if (!ref.current || !data) return;

    const nodes = new DataSet<GraphNode>(data.nodes);
    const edges = new DataSet(data.links as any);


    netRef.current?.destroy?.();

    netRef.current = new Network(
      ref.current,
      { nodes, edges },
      {
        physics: { stabilization: true, barnesHut: { gravitationalConstant: -1500 } },
        nodes: { shape: "dot", size: 14 },
        edges: { smooth: true },
        interaction: { hover: true },
      }
    );

    const hoverHandler = (params: { node?: string | number }) => {
      if (!params.node) {
        setTooltip(null);
        return;
      }

      // Get single node by ID
      const node = nodes.get(params.node); // type: GraphNode | undefined
      if (!node) return;

      // Get position
      const canvasPos = netRef.current!.getPositions([params.node])[params.node];
      const domPos = netRef.current!.canvasToDOM(canvasPos);

      setTooltip({
        x: domPos.x,
        y: domPos.y,
        content: `<strong>${node.label}</strong><br/>group: ${node.group ?? "-"}${
          node.time ? `<br/>time: ${node.time}` : ""
        }`,
      });
    };

    netRef.current.on("hoverNode", hoverHandler);
    netRef.current.on("blurNode", () => setTooltip(null));

    return () => {
      netRef.current?.off("hoverNode", hoverHandler);
      netRef.current?.off("blurNode", () => setTooltip(null));
      netRef.current?.destroy?.();
    };
  }, [data]);

  return (
    <div className="relative">
      <div ref={ref} style={{ width: "100%", height: 520 }} />
      {tooltip && (
        <div
          className="pointer-events-none absolute z-50 transform -translate-x-1/2 -translate-y-full"
          style={{ left: tooltip.x, top: tooltip.y, minWidth: 180 }}
          dangerouslySetInnerHTML={{
            __html: `<div class="bg-white border shadow p-3 rounded text-sm">${tooltip.content}</div>`,
          }}
        />
      )}
    </div>
  );
}
