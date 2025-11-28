"use client";

import React, { useMemo, useState } from "react";
import PieChartComponent from "@/app/(control-panel)/ansassets/charts/piechart/components/PieChart";
import TwoLevelPieChart from "@/app/(control-panel)/ansassets/charts/piechart/components/TwoLevelPieChart";
import CustomActivePieChart from "@/app/(control-panel)/ansassets/charts/piechart/components/CustomActivePieChart";
import {
  Box,
  Button,
  IconButton,
  MenuItem,
  Select,
  Slider,
  Switch,
  TextField,
  Typography,
} from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import DeleteIcon from "@mui/icons-material/Delete";

type ChartKind = "basic" | "twoLevel" | "customActive";

export default function Playground() {
  const [kind, setKind] = useState<ChartKind>("basic");

  // Basic / Custom controls:
  const [innerRadius, setInnerRadius] = useState(50);
  const [outerRadius, setOuterRadius] = useState(120);
  const [startAngle, setStartAngle] = useState(0);
  const [endAngle, setEndAngle] = useState(360);
  const [paddingAngle, setPaddingAngle] = useState(3);
  const [isDonut, setIsDonut] = useState(true);
  const [showTooltip, setShowTooltip] = useState(true);
  const [animate, setAnimate] = useState(true);

  // Two-level specific:
  const [outerInnerGap, setOuterInnerGap] = useState(10);

  // Slices data (for basic and custom)
  const [slices, setSlices] = useState([
    { name: "A", value: 400, color: "#1976d2" },
    { name: "B", value: 300, color: "#ef5350" },
    { name: "C", value: 300, color: "#66bb6a" },
    { name: "D", value: 200, color: "#ffa726" },
  ]);

  // Two-level slice sets (outer + inner)
  const [outerSlices, setOuterSlices] = useState([
    { name: "Group A", value: 500, color: "#1976d2" },
    { name: "Group B", value: 300, color: "#ef5350" },
    { name: "Group C", value: 200, color: "#66bb6a" },
  ]);
  const [innerSlices, setInnerSlices] = useState([
    { name: "a1", value: 200, color: "#ab47bc" },
    { name: "a2", value: 150, color: "#26c6da" },
    { name: "b1", value: 200, color: "#8d6e63" },
    { name: "c1", value: 150, color: "#ff7043" },
  ]);

  const addSlice = () => {
    setSlices((s) => [...s, { name: `S${s.length + 1}`, value: 100, color: "#8884d8" }]);
  };
  const removeSlice = (i: number) => setSlices((s) => s.filter((_, idx) => idx !== i));

  // Produce temporary in-memory JSON for basic custom charts (the components read from dataUrl,
  // but for playground we will render using inline props where possible by creating DataURLs).
  const basicDataUrl = useMemo(() => {
    // create a blob URL for slices array (so the component can fetch / use same dataUrl approach)
    const txt = JSON.stringify(slices);
    const blob = new Blob([txt], { type: "application/json" });
    return URL.createObjectURL(blob);
  }, [slices]);

  const outerDataUrl = useMemo(() => {
    const txt = JSON.stringify(outerSlices);
    const blob = new Blob([txt], { type: "application/json" });
    return URL.createObjectURL(blob);
  }, [outerSlices]);

  const innerDataUrl = useMemo(() => {
    const txt = JSON.stringify(innerSlices);
    const blob = new Blob([txt], { type: "application/json" });
    return URL.createObjectURL(blob);
  }, [innerSlices]);

  return (
    <div className="space-y-6">
      {/* Controls */}
      <div className="p-4 border rounded-xl dark:border-neutral-700 bg-gray-50 dark:bg-neutral-900">
        <div className="flex gap-4 items-center mb-4">
          <Typography variant="subtitle1">Chart</Typography>
          <Select value={kind} onChange={(e) => setKind(e.target.value as ChartKind)} size="small">
            <MenuItem value="basic">Basic Pie</MenuItem>
            <MenuItem value="twoLevel">Two-Level Pie</MenuItem>
            <MenuItem value="customActive">Custom Active</MenuItem>
          </Select>

          <FormRow label="Donut" control={<Switch checked={isDonut} onChange={(e) => setIsDonut(e.target.checked)} />} />
          <FormRow label="Tooltip" control={<Switch checked={showTooltip} onChange={(e) => setShowTooltip(e.target.checked)} />} />
          <FormRow label="Animate" control={<Switch checked={animate} onChange={(e) => setAnimate(e.target.checked)} />} />
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          <div>
            <Typography variant="caption" className="block mb-1">Inner Radius</Typography>
            <Slider min={0} max={160} value={innerRadius} onChange={(_, v) => setInnerRadius(v as number)} />
          </div>
          <div>
            <Typography variant="caption" className="block mb-1">Outer Radius</Typography>
            <Slider min={60} max={240} value={outerRadius} onChange={(_, v) => setOuterRadius(v as number)} />
          </div>
          <div>
            <Typography variant="caption" className="block mb-1">Start Angle</Typography>
            <Slider min={-360} max={360} value={startAngle} onChange={(_, v) => setStartAngle(v as number)} />
          </div>
          <div>
            <Typography variant="caption" className="block mb-1">End Angle</Typography>
            <Slider min={-360} max={360} value={endAngle} onChange={(_, v) => setEndAngle(v as number)} />
          </div>
          <div>
            <Typography variant="caption" className="block mb-1">Padding Angle</Typography>
            <Slider min={0} max={30} value={paddingAngle} onChange={(_, v) => setPaddingAngle(v as number)} />
          </div>
          <div>
            <Typography variant="caption" className="block mb-1">Outer-Inner Gap (two-level)</Typography>
            <Slider min={0} max={40} value={outerInnerGap} onChange={(_, v) => setOuterInnerGap(v as number)} />
          </div>
        </div>
      </div>

      {/* Dataset editors */}
      <div className="p-4 border rounded-xl bg-white dark:bg-neutral-900 dark:border-neutral-700">
        <div className="flex items-center justify-between mb-3">
          <Typography variant="subtitle1">Slices (Basic / Custom)</Typography>
          <div>
            <Button startIcon={<AddIcon />} size="small" onClick={addSlice}>Add slice</Button>
          </div>
        </div>

        <div className="space-y-2">
          {slices.map((s, i) => (
            <div key={i} className="flex gap-2 items-center">
              <TextField size="small" value={s.name} onChange={(e) => setSlices(prev => prev.map((p,idx)=> idx===i ? {...p, name: e.target.value} : p))} sx={{ width: 140 }} />
              <TextField size="small" type="number" value={s.value} onChange={(e) => setSlices(prev => prev.map((p,idx)=> idx===i ? {...p, value: Number(e.target.value)} : p))} sx={{ width: 120 }} />
              <input type="color" value={s.color} onChange={(e) => setSlices(prev => prev.map((p,idx)=> idx===i ? {...p, color: e.target.value} : p))} />
              <IconButton size="small" onClick={() => removeSlice(i)}><DeleteIcon /></IconButton>
            </div>
          ))}
        </div>
      </div>

      {/* Two-level editors */}
      <div className="p-4 border rounded-xl bg-white dark:bg-neutral-900 dark:border-neutral-700">
        <Typography variant="subtitle1" className="mb-2">Two-Level Data</Typography>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <TextAreaEditor label="Outer JSON" value={JSON.stringify(outerSlices, null, 2)} onChange={(v) => {
            try { setOuterSlices(JSON.parse(v)); } catch { /* ignore */ }
          }} />
          <TextAreaEditor label="Inner JSON" value={JSON.stringify(innerSlices, null, 2)} onChange={(v) => {
            try { setInnerSlices(JSON.parse(v)); } catch { /* ignore */ }
          }} />
        </div>
      </div>

      {/* Live Preview */}
      <div className="p-4 border rounded-xl bg-white dark:bg-neutral-900">
        {kind === "basic" && (
          <PieChartComponent
            title="Playground Preview (Basic)"
            dataUrl={basicDataUrl}
            dataKey="value"
            nameKey="name"
            colors={slices.map(s=> s.color)}
            // Pass radii/angles via props if component supports them (some components expect fixed radii)
          />
        )}

        {kind === "twoLevel" && (
          <TwoLevelPieChart
            title="Playground Preview (Two-Level)"
            outerDataUrl={outerDataUrl}
            innerDataUrl={innerDataUrl}
            dataKey="value"
            nameKey="name"
            colorsOuter={outerSlices.map(s=> s.color)}
            colorsInner={innerSlices.map(s=> s.color)}
          />
        )}

        {kind === "customActive" && (
          <CustomActivePieChart
            title="Playground Preview (Custom Active)"
            dataUrl={basicDataUrl}
            dataKey="value"
            nameKey="name"
            color={slices[0]?.color ?? "#8884d8"}
          />
        )}
      </div>
    </div>
  );
}

/* Small helper components used above */
function FormRow({ label, control }: { label: string; control: React.ReactNode }) {
  return (
    <div className="flex items-center gap-2">
      <Typography variant="body2" className="whitespace-nowrap">{label}</Typography>
      {control}
    </div>
  );
}

function TextAreaEditor({ label, value, onChange }: { label: string; value: string; onChange: (v: string) => void }) {
  return (
    <div>
      <Typography variant="caption" className="block mb-1">{label}</Typography>
      <textarea value={value} onChange={(e) => onChange(e.target.value)} className="w-full h-40 p-2 rounded border dark:bg-neutral-800 dark:text-white" />
    </div>
  );
}
