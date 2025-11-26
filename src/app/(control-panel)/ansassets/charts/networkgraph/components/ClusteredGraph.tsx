"use client";

import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null };

const palette = ["#06b6d4", "#f59e0b", "#10b981", "#ef4444", "#8b5cf6"];

export default function ClusteredGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !data) return;
    const nodes = new DataSet(
      data.nodes.map((n: any) => ({ ...n, color: palette[(n.group || 0) % palette.length], size: 16 }))
    );
    const edges = new DataSet(data.links);

    netRef.current?.destroy?.();

    netRef.current = new Network(ref.current, { nodes, edges }, {
      physics: { stabilization: false, barnesHut: { gravitationalConstant: -1500 } },
      nodes: { font: { color: "#fff", size: 13 } },
      edges: { smooth: true },
      interaction: { hover: true },
      layout: { improvedLayout: true }
    });

    return () => netRef.current?.destroy?.();
  }, [data]);

  return <div ref={ref} style={{ width: "100%", height: 520 }} />;
}
