"use client";

import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null };

export default function BasicGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const networkRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !data) return;
    const nodes = new DataSet(data.nodes);
    const edges = new DataSet(data.links);

    networkRef.current?.destroy?.();

    const options = {
  physics: {
    stabilization: true,
    barnesHut: { gravitationalConstant: -2000 },
  },
  nodes: {
    shape: "dot",
    size: 14,
    font: { size: 14 },
  },
  edges: {
    smooth: {
      enabled: true,
      type: "dynamic",
      roundness: 0.5,
    },
    color: "#7c7c8a",
  },
  interaction: {
    hover: true,
    tooltipDelay: 100,
  },
};


    networkRef.current = new Network(ref.current, { nodes, edges }, options);
    return () => {
      networkRef.current?.destroy?.();
    };
  }, [data]);

  return <div ref={ref} style={{ width: "100%", height: 480 }} />;
}
