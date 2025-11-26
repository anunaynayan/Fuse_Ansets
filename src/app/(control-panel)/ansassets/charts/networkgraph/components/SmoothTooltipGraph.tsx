"use client";

import React, { useEffect, useRef, useState } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null };

export default function SmoothTooltipGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<any>(null);
  const [tooltip, setTooltip] = useState<{ x: number; y: number; content: string } | null>(null);

  useEffect(() => {
    if (!ref.current || !data) return;
    const nodes = new DataSet(data.nodes);
    const edges = new DataSet(data.links);

    netRef.current?.destroy?.();

    netRef.current = new Network(ref.current, { nodes, edges }, {
      physics: { stabilization: true, barnesHut: { gravitationalConstant: -1500 } },
      nodes: { shape: "dot", size: 14 },
      edges: { smooth: true },
      interaction: { hover: true }
    });

    const moveHandler = (params: any) => {
      // mouse position handled via HTML events
    };

    const hoverHandler = (params: any) => {
      if (params.node) {
        const node = nodes.get(params.node);
        const canvasPos = netRef.current.getPositions([params.node])[params.node];
        const clientRect = ref.current!.getBoundingClientRect();

        setTooltip({
          x: canvasPos.x - clientRect.left + clientRect.width / 2,
          y: canvasPos.y - clientRect.top,
          content: `<strong>${node.label}</strong><br/>group: ${node.group ?? "-"}${node.time ? `<br/>time: ${node.time}` : ""}`
        });
      } else {
        setTooltip(null);
      }
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
          dangerouslySetInnerHTML={{ __html: `<div class="bg-white border shadow p-3 rounded text-sm">${tooltip.content}</div>` }}
        />
      )}
    </div>
  );
}
