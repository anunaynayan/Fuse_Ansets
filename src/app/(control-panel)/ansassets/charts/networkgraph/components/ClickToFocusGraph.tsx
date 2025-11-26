"use client";

import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null };

export default function ClickToFocusGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !data) return;
    const nodes = new DataSet(data.nodes);
    const edges = new DataSet(data.links);

    netRef.current?.destroy?.();

    netRef.current = new Network(ref.current, { nodes, edges }, {
      physics: { stabilization: true, barnesHut: { gravitationalConstant: -1200 } },
      nodes: { shape: "dot", size: 14 },
      edges: { color: "#9ca3af" },
      interaction: { hover: true, multiselect: false }
    });

    const clickHandler = (params: any) => {
      if (params.nodes && params.nodes.length === 1) {
        const nodeId = params.nodes[0];
        netRef.current.selectNodes([nodeId]);
        netRef.current.focus(nodeId, { scale: 1.6, animation: { duration: 500 } });

        // fade others by changing their color temporarily
        const all = nodes.get();
        const updates = all.map((n: any) => (n.id === nodeId ? { id: n.id, color: n.color } : { id: n.id, color: "#e5e7eb" }));
        nodes.update(updates);
      } else {
        // reset
        nodes.update(nodes.get().map((n: any) => ({ id: n.id, color: undefined })));
        netRef.current.fit({ animation: { duration: 300 } });
      }
    };

    netRef.current.on("click", clickHandler);

    return () => {
      netRef.current?.off("click", clickHandler);
      netRef.current?.destroy?.();
    };
  }, [data]);

  return <div ref={ref} style={{ width: "100%", height: 520 }} />;
}
