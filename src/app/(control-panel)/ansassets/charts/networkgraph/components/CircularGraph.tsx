"use client";

import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null };

function placeNodesInCircle(nodes: any[], width = 800, height = 800) {
  const n = nodes.length;
  const cx = width / 2, cy = height / 2, r = Math.min(width, height) / 2 - 80;
  return nodes.map((node, i) => {
    const angle = (i / n) * Math.PI * 2;
    return { ...node, x: cx + r * Math.cos(angle), y: cy + r * Math.sin(angle), fixed: { x: true, y: true } };
  });
}

export default function CircularGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !data) return;

    const sized = placeNodesInCircle(data.nodes, ref.current.offsetWidth, 600);
    const nodes = new DataSet(sized);
    const edges = new DataSet(data.links);

    netRef.current?.destroy?.();

    netRef.current = new Network(ref.current, { nodes, edges }, {
      physics: false,
      nodes: { shape: "dot", size: 14, font: { size: 13 } },
      edges: { smooth: { enabled: true, type: "curvedCW" }, color: "#4b5563" },
      interaction: { hover: true },
    });

    return () => netRef.current?.destroy?.();
  }, [data]);

  return <div ref={ref} style={{ width: "100%", height: 600 }} />;
}
