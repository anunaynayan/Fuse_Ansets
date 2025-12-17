"use client";

import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null; width?: number };

function mapTimeToX(nodes: any[], width = 900, padding = 80) {
  const times = nodes.map((n: any) => new Date(n.time).getTime()).filter(Boolean);
  if (!times.length) return nodes;
  const min = Math.min(...times), max = Math.max(...times);
  return nodes.map((n) => {
    if (!n.time) return n;
    const t = new Date(n.time).getTime();
    const x = padding + ((t - min) / (max - min || 1)) * (width - padding * 2);
    return { ...n, x, y: 220, fixed: { x: true, y: true } };
  });
}

export default function TimelineGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !data) return;

    const placed = mapTimeToX(data.nodes, ref.current.offsetWidth || 900);
    const nodes = new DataSet(placed);
    const edges = new DataSet(data.links);

    netRef.current?.destroy?.();
    netRef.current = new Network(ref.current, { nodes, edges }, {
      physics: false,
      nodes: { shape: "dot", size: 14 },
      edges: { smooth: false, arrows: { to: { enabled: true } } },
      interaction: { hover: true }
    });

    return () => netRef.current?.destroy?.();
  }, [data]);

  return <div ref={ref} style={{ width: "100%", height: 480 }} />;
}
