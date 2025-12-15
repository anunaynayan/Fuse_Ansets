"use client";

import { Card, CardContent, Typography } from "@mui/material";
import * as Icons from "@mui/icons-material";
import type { SvgIconComponent } from "@mui/icons-material";

type Metric = {
  id: string;
  title: string;
  value: number;
  change: number;
  unit?: string; 
  color: string;
  icon: string; 
};

const DEFAULT_ICON = "Insights"; // any valid icon name

export default function SimpleMetricCard({ metric }: { metric?: Metric }) {
  // Safe defaults so the component never crashes if metric is missing
  const safeMetric: Metric = metric ?? {
    id: "default",
    title: "Metric",
    value: 0,
    change: 0,
    unit: undefined,
    color: "#6b7280", // gray-500
    icon: DEFAULT_ICON,
  };

  const IconComp =
    (Icons[safeMetric.icon as keyof typeof Icons] as SvgIconComponent) ??
    (Icons[DEFAULT_ICON as keyof typeof Icons] as SvgIconComponent);

  const isPositive = (safeMetric.change ?? 0) >= 0;

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardContent className="flex justify-between items-center p-5">
        <div>
          <Typography variant="subtitle2">{safeMetric.title}</Typography>

          <Typography variant="h5" className="font-bold">
            {safeMetric.unit
              ? `${safeMetric.unit}${safeMetric.value.toLocaleString()}`
              : safeMetric.value.toLocaleString()}
          </Typography>

          <Typography
            variant="body2"
            className={isPositive ? "text-green-500" : "text-red-500"}
          >
            {isPositive ? "▲" : "▼"} {Math.abs(safeMetric.change)}%
          </Typography>
        </div>

        {IconComp && (
          <IconComp sx={{ fontSize: 40, color: safeMetric.color }} />
        )}
      </CardContent>
    </Card>
  );
}
