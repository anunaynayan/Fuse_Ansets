"use client";

import React, { useState } from "react";
import ColumnChartComponent from "@/app/(control-panel)/ansassets/charts/columnchart/components/ColumnChart";
import { TextField, Switch, FormControlLabel, Button } from "@mui/material";

export default function Playground() {
  const [barSize, setBarSize] = useState(35);
  const [stacked, setStacked] = useState(false);
  const [showGrid, setShowGrid] = useState(true);
  const [showLabels, setShowLabels] = useState(true);

  const [series, setSeries] = useState([
    { name: "Home", dataKey: "home", color: "#1976d2" },
    { name: "Blog", dataKey: "blog", color: "#ef5350" },
    { name: "Pricing", dataKey: "pricing", color: "#66bb6a" },
  ]);

  const reset = () => {
    setBarSize(35);
    setStacked(false);
    setShowGrid(true);
    setShowLabels(true);
  };

  return (
    <div className="space-y-6 mt-6">
      {/* Controls */}
      <div className="flex flex-wrap items-center gap-4 p-4 border rounded-xl dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900">
        <TextField
          label="Bar Size"
          type="number"
          value={barSize}
          onChange={(e) => setBarSize(Number(e.target.value))}
          size="small"
        />

        <FormControlLabel
          control={
            <Switch
              checked={stacked}
              onChange={(e) => setStacked(e.target.checked)}
            />
          }
          label="Stack Bars"
        />

        <FormControlLabel
          control={
            <Switch
              checked={showGrid}
              onChange={(e) => setShowGrid(e.target.checked)}
            />
          }
          label="Show Grid"
        />

        <FormControlLabel
          control={
            <Switch
              checked={showLabels}
              onChange={(e) => setShowLabels(e.target.checked)}
            />
          }
          label="Show Labels"
        />

        <Button variant="outlined" onClick={reset}>
          Reset
        </Button>
      </div>

      {/* Chart Preview */}
      <div className="p-4 border rounded-xl dark:border-neutral-700 bg-white dark:bg-neutral-900">
        <ColumnChartComponent
          title="Playground Preview"
          dataUrl="/assets/columnData.json"
          series={series}
          barSize={barSize}
          stacked={stacked}
          showGrid={showGrid}
          showLabels={showLabels}
        />
      </div>
    </div>
  );
}
