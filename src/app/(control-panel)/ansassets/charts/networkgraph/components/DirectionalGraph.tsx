"use client";

import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null };

export default function DirectionalGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !data) return;
    const nodes = new DataSet(data.nodes);
    // ensure links have arrows
    const edges = new DataSet(data.links.map((l: any) => ({ ...l, arrows: "to" })));

    netRef.current?.destroy?.();

    netRef.current = new Network(ref.current, { nodes, edges }, {
      physics: { stabilization: true },
      nodes: { shape: "dot", size: 12 },
      edges: { color: "#2563eb", arrows: { to: { enabled: true, scaleFactor: 0.6 } } },
      interaction: { hover: true }
    });

    return () => netRef.current?.destroy?.();
  }, [data]);

  return <div ref={ref} style={{ width: "100%", height: 480 }} />;
}
