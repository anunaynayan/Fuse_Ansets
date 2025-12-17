"use client";

import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null; direction?: "UD" | "LR" | "DU" | "RL" };

export default function HierarchicalTree({ data, direction = "UD" }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !data) return;
    const nodes = new DataSet(data.nodes);
    const edges = new DataSet(data.links);

    netRef.current?.destroy?.();

    netRef.current = new Network(ref.current, { nodes, edges }, {
      layout: { hierarchical: { enabled: true, direction, sortMethod: "directed" } },
      nodes: {
  shape: "box",
  margin: { top: 10, right: 10, bottom: 10, left: 10 },
  font: { size: 14 },
},
      edges: { arrows: { to: { enabled: true } }, smooth: false },
      physics: { hierarchicalRepulsion: { nodeDistance: 120 } },
      interaction: { hover: true, multiselect: false }
    });

    return () => netRef.current?.destroy?.();
  }, [data, direction]);

  return <div ref={ref} style={{ width: "100%", height: 560 }} />;
}
