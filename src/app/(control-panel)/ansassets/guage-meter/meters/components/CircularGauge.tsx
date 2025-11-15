// components/CircularGauge.tsx
"use client";

import GaugeChart from "react-gauge-chart";
import { Card, CardContent, Typography } from "@mui/material";

interface CircularGaugeProps {
  value: number; // between 0 and 1
  label?: string;
}

export default function CircularGauge({ value, label }: CircularGaugeProps) {
  return (
    <Card sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        {label || "Circular Gauge"}
      </Typography>
      <GaugeChart
        id="circular-gauge"
        nrOfLevels={20}
        percent={value}
        colors={["#FF5F6D", "#FFC371"]}
        needleColor="#345243"
      />
      <Typography variant="body2" color="text.secondary">
        {Math.round(value * 100)}%
      </Typography>
    </Card>
  );
}
