// components/SemiCircularGauge.tsx
"use client";

import GaugeChart from "react-gauge-chart";
import { Card, CardContent, Typography } from "@mui/material";

interface SemiCircularGaugeProps {
  value: number; // between 0 and 1
  label?: string;
}

export default function SemiCircularGauge({ value, label }: SemiCircularGaugeProps) {
  return (
    <Card sx={{ p: 2, textAlign: "center" }}>
      <Typography variant="h6" gutterBottom>
        {label || "Semi-Circular Gauge"}
      </Typography>
      <GaugeChart
        id="semi-circular-gauge"
        nrOfLevels={30}
        percent={value}
        colors={["#00C9A7", "#92FE9D"]}
        arcPadding={0.02}
        arcWidth={0.3}
        cornerRadius={3}
        needleColor="#345243"
        arcsLength={[0.5, 0.5]} // optional tweak for smoother layout
        textColor="#333"
        style={{ width: "100%" }}
        hideText
      />
      <Typography variant="body2" color="text.secondary">
        {Math.round(value * 100)}%
      </Typography>
    </Card>
  );
}
