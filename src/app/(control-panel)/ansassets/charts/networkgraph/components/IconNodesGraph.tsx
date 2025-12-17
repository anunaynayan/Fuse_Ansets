"use client";

import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null };

export default function IconNodesGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !data) return;
    const nodes = new DataSet(
      data.nodes.map((n: any) => ({
        ...n,
        shape: n.image ? "circularImage" : "dot",
        size: n.image ? 32 : 16,
        image: n.image || undefined
      }))
    );
    const edges = new DataSet(data.links);

    netRef.current?.destroy?.();

    netRef.current = new Network(ref.current, { nodes, edges }, {
      nodes: { font: { size: 12 }, borderWidth: 2 },
      edges: { smooth: true, color: "#9ca3af" },
      interaction: { hover: true, tooltipDelay: 80 },
      physics: { stabilization: true, barnesHut: { gravitationalConstant: -1500 } }
    });

    return () => netRef.current?.destroy?.();
  }, [data]);

  return <div ref={ref} style={{ width: "100%", height: 520 }} />;
}
