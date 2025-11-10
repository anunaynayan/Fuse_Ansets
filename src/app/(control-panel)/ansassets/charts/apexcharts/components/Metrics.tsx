"use client";

import { Card, CardContent, Typography } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import VisibilityIcon from "@mui/icons-material/Visibility";
import TrendingUpIcon from "@mui/icons-material/TrendingUp";
import TrendingDownIcon from "@mui/icons-material/TrendingDown";
import { JSX } from "react";

type Metric = {
  title: string;
  value: string | number;
  change: number;
  icon: JSX.Element;
};

type MetricsProps = {
  metrics: {
    totalVisitors: { value: number; change: number };
    pageViews: { value: number; change: number };
    conversionRate: { value: number; change: number };
    bounceRate: { value: number; change: number };
  };
};

export default function Metrics({ metrics }: MetricsProps) {
  const metricList: Metric[] = [
    {
      title: "Total Visitors",
      value: metrics.totalVisitors.value.toLocaleString(),
      change: metrics.totalVisitors.change,
      icon: <PeopleIcon sx={{ fontSize: 40, color: "#8B5CF6" }} />,
    },
    {
      title: "Page Views",
      value: metrics.pageViews.value.toLocaleString(),
      change: metrics.pageViews.change,
      icon: <VisibilityIcon sx={{ fontSize: 40, color: "#22D3EE" }} />,
    },
    {
      title: "Conversion Rate",
      value: `${metrics.conversionRate.value}%`,
      change: metrics.conversionRate.change,
      icon: <TrendingUpIcon sx={{ fontSize: 40, color: "#10B981" }} />,
    },
    {
      title: "Bounce Rate",
      value: `${metrics.bounceRate.value}%`,
      change: metrics.bounceRate.change,
      icon: <TrendingDownIcon sx={{ fontSize: 40, color: "#EF4444" }} />,
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      {metricList.map((m, i) => (
        <Card key={i} >
          <CardContent className="flex items-center gap-4 justify-between">
            {/* Text */}
            <div>
              <Typography variant="subtitle2">
                {m.title}
              </Typography>
              <Typography variant="h5" className=" font-bold">
                {m.value}
              </Typography>
              <Typography
                variant="body2"
                className={m.change >= 0 ? "text-green-400" : "text-red-400"}
              >
                {m.change >= 0 ? `▲ ${m.change}%` : `▼ ${Math.abs(m.change)}%`}
              </Typography>
            </div>
            {/* Icon */}
            <div>{m.icon}</div>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
