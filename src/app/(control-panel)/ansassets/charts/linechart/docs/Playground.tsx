"use client";

import React, { useState } from "react";
import LineChartComponent from "@/app/(control-panel)/ansassets/charts/linechart/components/lineChart";
import {
  TextField,
  Switch,
  FormControlLabel,
  Button,
  Slider,
  IconButton,
  Box,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import AddIcon from "@mui/icons-material/Add";

function randomColor() {
  return "#" + Math.floor(Math.random() * 16777215).toString(16).padStart(6, "0");
}

export default function Playground() {
  const [height, setHeight] = useState(350);
  const [showGrid, setShowGrid] = useState(true);
  const [smooth, setSmooth] = useState(true);
  const [showDots, setShowDots] = useState(true);
  const [animate, setAnimate] = useState(true);
  const [area, setArea] = useState(false);
  const [gradient, setGradient] = useState(false);
  const [showValueLabels, setShowValueLabels] = useState(false);

  const [datasets, setDatasets] = useState([
    { name: "Visits", dataKey: "visits", color: "#1976d2", strokeWidth: 2 },
    { name: "Signups", dataKey: "signups", color: "#ef5350", strokeWidth: 2 },
  ]);

  const addSeries = () => {
    setDatasets((s) => [
      ...s,
      { name: `Series ${s.length + 1}`, dataKey: `series${s.length + 1}`, color: randomColor(), strokeWidth: 2 },
    ]);
  };

  const updateSeries = (index: number, patch: Partial<any>) => {
    setDatasets((s) => s.map((d, i) => (i === index ? { ...d, ...patch } : d)));
  };

  const removeSeries = (index: number) => {
    setDatasets((s) => s.filter((_, i) => i !== index));
  };

  const reset = () => {
    setHeight(350);
    setShowGrid(true);
    setSmooth(true);
    setShowDots(true);
    setAnimate(true);
    setArea(false);
    setGradient(false);
    setShowValueLabels(false);
    setDatasets([
      { name: "Visits", dataKey: "visits", color: "#1976d2", strokeWidth: 2 },
      { name: "Signups", dataKey: "signups", color: "#ef5350", strokeWidth: 2 },
    ]);
  };

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="p-4 border rounded-xl bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700">
        <Typography variant="subtitle1" className="mb-3">Chart Controls</Typography>

        <div className="flex flex-wrap gap-4 items-center">
          <FormControlLabel control={<Switch checked={showGrid} onChange={(e) => setShowGrid(e.target.checked)} />} label="Show Grid" />
          <FormControlLabel control={<Switch checked={smooth} onChange={(e) => setSmooth(e.target.checked)} />} label="Smooth Line" />
          <FormControlLabel control={<Switch checked={showDots} onChange={(e) => setShowDots(e.target.checked)} />} label="Show Dots" />
          <FormControlLabel control={<Switch checked={animate} onChange={(e) => setAnimate(e.target.checked)} />} label="Animation" />
          <FormControlLabel control={<Switch checked={area} onChange={(e) => setArea(e.target.checked)} />} label="Area Mode" />
          <FormControlLabel control={<Switch checked={gradient} onChange={(e) => setGradient(e.target.checked)} />} label="Gradient Strokes/Fills" />
          <FormControlLabel control={<Switch checked={showValueLabels} onChange={(e) => setShowValueLabels(e.target.checked)} />} label="Show Value Labels" />
        </div>

        <div className="mt-4">
          <Typography gutterBottom>Height: {height}px</Typography>
          <Slider value={height} min={200} max={800} onChange={(_, v) => setHeight(v as number)} />
        </div>

        <div className="mt-4 flex gap-3">
          <Button startIcon={<AddIcon />} onClick={addSeries} variant="outlined">Add Series</Button>
          <Button onClick={reset} variant="outlined">Reset</Button>
        </div>
      </div>

      {/* Datasets Editor */}
      <div className="p-4 border rounded-xl bg-white dark:bg-neutral-900 dark:border-neutral-700 space-y-3">
        <Typography variant="subtitle1">Datasets</Typography>
        {datasets.map((d, i) => (
          <div key={i} className="flex gap-3 items-center">
            <TextField label="Name" size="small" value={d.name} onChange={(e) => updateSeries(i, { name: e.target.value })} />
            <TextField label="dataKey" size="small" value={d.dataKey} onChange={(e) => updateSeries(i, { dataKey: e.target.value })} />
            <div className="flex items-center gap-2">
              <input type="color" value={d.color} onChange={(e) => updateSeries(i, { color: e.target.value })} className="h-10 w-12 p-0 border rounded" />
            </div>
            <TextField label="Stroke" size="small" type="number" value={d.strokeWidth} onChange={(e) => updateSeries(i, { strokeWidth: Number(e.target.value) })} sx={{ width: 100 }} />
            <IconButton onClick={() => removeSeries(i)} size="small"><DeleteIcon /></IconButton>
          </div>
        ))}
      </div>

      {/* Live Preview */}
      <div className="p-4 border rounded-xl bg-white dark:bg-neutral-900 dark:border-neutral-700">
        <LineChartComponent
          title="Playground Preview"
          dataUrl="/assets/trafficOverTime.json"
          datasets={datasets}
          showGrid={showGrid}
          height={height}
          smooth={smooth}
          showDots={showDots}
          animate={animate}
          area={area}
          gradient={gradient}
          showValueLabels={showValueLabels}
        />
      </div>
    </div>
  );
}
