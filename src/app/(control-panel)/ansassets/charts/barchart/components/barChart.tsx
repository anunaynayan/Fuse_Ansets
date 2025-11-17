
"use client";

import { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { Card, Typography, CircularProgress } from "@mui/material";

interface ChartData {
  name: string;
  value: number;
}

interface BarChartComponentProps {
  title?: string;
  orientation?: "vertical" | "horizontal";
  barColor?: string;
  barSize?: number;
  showLabels?: boolean;
  dataUrl?: string; // file path like /data/barData.json
}

export default function BarChartComponent({
  title = "Bar Chart",
  orientation = "vertical",
  barColor = "#1976d2",
  barSize = 40,
  showLabels = false,
  dataUrl = "/data/barData.json",
}: BarChartComponentProps) {
  const [data, setData] = useState<ChartData[] | null>(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then(setData)
      .catch((err) => console.error("Error loading chart data:", err));
  }, [dataUrl]);

  const isVertical = orientation === "vertical";

  if (!data)
    return (
      <Card sx={{ p: 3, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 1 }}>Loading data...</Typography>
      </Card>
    );

  return (
    <div className="p-2">
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart
          data={data}
          layout={isVertical ? "horizontal" : "vertical"}
          margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
          barSize={barSize}
        >
          <CartesianGrid strokeDasharray="3 3" />
          {isVertical ? (
            <>
              <XAxis dataKey="name" />
              <YAxis />
            </>
          ) : (
            <>
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" />
            </>
          )}
          <Tooltip />
          <Legend />
          <Bar dataKey="value" fill={barColor} animationDuration={800}>
            {showLabels && <LabelList dataKey="value" position="top" />}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
