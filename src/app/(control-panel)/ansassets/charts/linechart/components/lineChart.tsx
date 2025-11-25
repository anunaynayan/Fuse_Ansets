"use client";

import { useTheme } from "@mui/material/styles";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Card, Typography, CircularProgress } from "@mui/material";
import { useEffect, useState } from "react";

interface LineDataset {
  name: string;
  dataKey: string;
  color: string;
  strokeWidth?: number;
}

interface ChartPoint {
  [key: string]: string | number;
}

interface LineChartComponentProps {
  title?: string;
  dataUrl: string;
  datasets: LineDataset[];
  showGrid?: boolean;
  height?: number;
}

export default function LineChartComponent({
  title = "Line Chart",
  dataUrl,
  datasets,
  showGrid = true,
  height = 350,
}: LineChartComponentProps) {
  const theme = useTheme();
  const [data, setData] = useState<ChartPoint[] | null>(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((res) => {
        setTimeout(() => setData(res), 200); // smooth animation
      });
  }, [dataUrl]);

  if (!data)
    return (
      <Card sx={{ p: 3, textAlign: "center" }}>
        <CircularProgress />
        <Typography sx={{ mt: 1 }}>Loading chart...</Typography>
      </Card>
    );

  return (
    <div className="p-3">
      <Typography variant="h6" gutterBottom>
        {title}
      </Typography>

      <ResponsiveContainer width="100%" height={height}>
        <LineChart
          data={data}
          margin={{ top: 20, right: 25, left: 10, bottom: 10 }}
        >
          {showGrid && (
            <CartesianGrid
              strokeDasharray="3 3"
              stroke={theme.palette.divider}
              opacity={0.3}
            />
          )}

          <XAxis
            dataKey="name"
            stroke={theme.palette.text.secondary}
            tick={{ fontSize: 12 }}
          />
          <YAxis
            stroke={theme.palette.text.secondary}
            tick={{ fontSize: 12 }}
          />

          <Tooltip
            contentStyle={{
              background: theme.palette.background.paper,
              border: `1px solid ${theme.palette.divider}`,
            }}
            labelStyle={{
              color: theme.palette.text.primary,
              fontWeight: 600,
            }}
          />
          <Legend />

          {datasets.map((line) => (
            <Line
              key={line.dataKey}
              type="monotone"
              dataKey={line.dataKey}
              stroke={line.color}
              strokeWidth={line.strokeWidth ?? 2}
              dot={{ r: 3 }}
              activeDot={{ r: 5 }}
              animationDuration={1000}
            />
          ))}
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
}
