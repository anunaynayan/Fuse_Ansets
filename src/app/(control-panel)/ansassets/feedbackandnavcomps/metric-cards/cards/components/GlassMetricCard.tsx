"use client";

import { useState } from "react";
import { Typography } from "@mui/material";
import * as Icons from "@mui/icons-material";

type Metric = {
  id: string;
  title: string;
  value: number;
  change: number;
  unit?: string;
  color: string;
  icon: string;
};

export default function GlassMetricCard({ metric }: { metric: Metric }) {
  const IconComp = Icons[metric.icon as keyof typeof Icons];
  const isPositive = metric.change >= 0;
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onAnimationEnd={() => setHovered(false)}
      className="
        relative rounded-2xl overflow-hidden shadow-xl border border-white/20 
        backdrop-blur-xl bg-white/10 transition-transform duration-500 
        hover:scale-[1.03] hover:shadow-2xl group
      "
      style={{
        background: "rgba(255,255,255,0.08)",
        backdropFilter: "blur(14px)",
      }}
    >

      {/* Content */}
      <div className="relative z-10 p-5 flex justify-between items-center">
        <div>
          <Typography variant="subtitle2" className="text-gray-200">
            {metric.title}
          </Typography>
          <Typography variant="h5" className="font-bold text-white">
            {metric.unit
              ? `${metric.unit}${metric.value}`
              : metric.value.toLocaleString()}
          </Typography>
          <Typography
            variant="body2"
            className={isPositive ? "text-green-400" : "text-red-400"}
          >
            {isPositive ? "▲" : "▼"} {Math.abs(metric.change)}%
          </Typography>
        </div>
        {IconComp && <IconComp sx={{ fontSize: 40, color: metric.color }} />}
      </div>
    </div>
  );
}
