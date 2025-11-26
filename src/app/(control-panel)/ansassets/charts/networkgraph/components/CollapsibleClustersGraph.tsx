"use client";

import React, { useEffect, useRef } from "react";
import { Network } from "vis-network/standalone";
import { DataSet } from "vis-data";

type Props = { data: any | null };

export default function CollapsibleClustersGraph({ data }: Props) {
  const ref = useRef<HTMLDivElement | null>(null);
  const netRef = useRef<any>(null);

  useEffect(() => {
    if (!ref.current || !data) return;
    const nodes = new DataSet(data.nodes);
    const edges = new DataSet(data.links);

    netRef.current?.destroy?.();

    const options = {
      physics: { stabilization: true },
      nodes: { shape: "dot", size: 16 },
      edges: { smooth: true },
      interaction: { hover: true }
    };

    netRef.current = new Network(ref.current, { nodes, edges }, options);

    // create clusters by group (if group exists)
    const groups = Array.from(new Set((data.nodes || []).map((n: any) => n.group))).filter(Boolean);
    groups.forEach((g: any) => {
      try {
        netRef.current.cluster({
          joinCondition: function (childOptions: any) {
            return childOptions.group === g;
          },
          clusterNodeProperties: { id: `cluster:${g}`, label: `Group ${g}`, borderWidth: 2, shape: "ellipse", color: "#6ee7b7" }
        });
      } catch (e) {
        // ignore clustering errors for too small groups
      }
    });

    // toggle cluster on click
    const handler = (params: any) => {
      if (params.nodes?.length) {
        const nodeId = params.nodes[0];
        if (String(nodeId).startsWith("cluster:")) {
          netRef.current.openCluster(nodeId);
        } else {
          // attempt to find a cluster around this node (if any)
          const clusters = netRef.current.getClusters?.();
          // no-op: user can expand via clicking cluster
        }
      }
    };

    netRef.current.on("click", handler);

    return () => {
      netRef.current?.off?.("click", handler);
      netRef.current?.destroy?.();
    };
  }, [data]);

  return <div ref={ref} style={{ width: "100%", height: 520 }} />;
}
