import { useState } from "react";
import { Slider, Switch, Select, MenuItem, InputLabel, FormControl, Typography } from "@mui/material";
import BarChartComponent from "@/app/(control-panel)/ansassets/charts/barchart/components/barChart";
// import { Typography } from "@mui/system";÷

export default function Playground() {
  const [orientation, setOrientation] = useState<"vertical" | "horizontal">("vertical");
  const [barColor, setBarColor] = useState("#1976d2");
  const [barSize, setBarSize] = useState(40);
  const [showLabels, setShowLabels] = useState(false);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

      {/* Controls Panel */}
      <div className="p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
        <Typography variant="h6" className="font-semibold mb-4">
          Controls
        </Typography>

        {/* Orientation */}
        <FormControl fullWidth className="mb-6">
          <InputLabel>Orientation</InputLabel>
          <Select
            value={orientation}
            label="Orientation"
            onChange={(e) => setOrientation(e.target.value as "vertical" | "horizontal")}
          >
            <MenuItem value="vertical">Vertical</MenuItem>
            <MenuItem value="horizontal">Horizontal</MenuItem>
          </Select>
        </FormControl>

        {/* Bar Color */}
        <div className="mb-6">
          <Typography className="mb-2">Bar Color</Typography>
          <input
            type="color"
            className="w-full h-10 rounded cursor-pointer"
            value={barColor}
            onChange={(e) => setBarColor(e.target.value)}
          />
        </div>

        {/* Bar Size */}
        <div className="mb-6">
          <Typography className="mb-2">Bar Size: {barSize}px</Typography>
          <Slider
            value={barSize}
            min={10}
            max={80}
            onChange={(_, val) => setBarSize(val as number)}
          />
        </div>

        {/* Show Labels */}
        <div className="flex items-center justify-between mt-4">
          <Typography>Show Labels</Typography>
          <Switch checked={showLabels} onChange={() => setShowLabels(!showLabels)} />
        </div>
      </div>

      {/* Live Preview */}
      <div className="lg:col-span-2 p-6 bg-white dark:bg-gray-900 rounded-xl shadow">
        <Typography variant="h6" className="font-semibold mb-4">
          Live Preview
        </Typography>

        <BarChartComponent
          title="Playground Chart"
          barColor={barColor}
          barSize={barSize}
          orientation={orientation}
          showLabels={showLabels}
          dataUrl="/assets/trafficPage.json"
        />
      </div>
    </div>
  );
}
