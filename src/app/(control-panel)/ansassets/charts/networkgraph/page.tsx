"use client";

import React, { useEffect, useState } from "react";
import BasicGraph from "./components/BasicGraph";
import DirectionalGraph from "./components/DirectionalGraph";
import ClusteredGraph from "./components/ClusteredGraph";

import HierarchicalTree from "./components/HierarchicalTree";
import CircularGraph from "./components/CircularGraph";
import IconNodesGraph from "./components/IconNodesGraph";
import CollapsibleClustersGraph from "./components/CollapsibleClustersGraph";
import ClickToFocusGraph from "./components/ClickToFocusGraph";
import SmoothTooltipGraph from "./components/SmoothTooltipGraph";
import TimelineGraph from "./components/TimelineGraph";

import { Card, CardHeader, CardContent, Typography } from "@mui/material";

export default function NetworkPage() {
  const [graphData, setGraphData] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/assets/network-data.json")
      .then((r) => r.json())
      .then((json) => {
        setGraphData(json);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-6 space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-semibold">Network Graphs — variants</h1>
        <div className="text-sm text-gray-500">
          Data:{" "}
          <span className="font-medium">public/assets/network-data.json</span>
        </div>
      </div>

      {loading && <p>Loading…</p>}

      <div className="grid grid-cols-1 lg:grid-cols-1 gap-6">
        <Card>
          <CardHeader title={<Typography>Basic Graph</Typography>} />
          <CardContent>
            <BasicGraph data={graphData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={<Typography>Directional</Typography>} />
          <CardContent>
            <DirectionalGraph data={graphData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={<Typography>Clustered</Typography>} />
          <CardContent>
            <ClusteredGraph data={graphData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={<Typography>Hierarchical Tree</Typography>} />
          <CardContent>
            <HierarchicalTree data={graphData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={<Typography>Circular Layout</Typography>} />
          <CardContent>
            <CircularGraph data={graphData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={<Typography>Icon Nodes</Typography>} />
          <CardContent>
            <IconNodesGraph data={graphData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={<Typography>Collapsible Clusters</Typography>} />
          <CardContent>
            <CollapsibleClustersGraph data={graphData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={<Typography>Click to Focus</Typography>} />
          <CardContent>
            <ClickToFocusGraph data={graphData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={<Typography>Smooth Tooltip</Typography>} />
          <CardContent>
            <SmoothTooltipGraph data={graphData} />
          </CardContent>
        </Card>

        <Card>
          <CardHeader title={<Typography>Timeline / Dependency</Typography>} />
          <CardContent>
            <TimelineGraph data={graphData} />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
