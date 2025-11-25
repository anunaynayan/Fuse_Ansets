"use client";

import React, { useState, useEffect } from "react";
import {
  BarChart,
  Bar,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  LabelList,
} from "recharts";
import { CustomBar } from "./CustomBar";

type Series = {
  name: string;
  dataKey: string;
  color: string;
  stacked?: boolean;
};

type Props = {
  title?: string;
  dataUrl: string;
  series: Series[];
  barSize?: number;
  showGrid?: boolean;
  stacked?: boolean;
  showLabels: boolean; 
};

export default function ColumnChartComponent({
  title,
  dataUrl,
  series,
  barSize = 35,
  showGrid = true,
  stacked = false,
}: Props) {
  const [data, setData] = useState<any[]>([]);
  const [hovered, setHovered] = useState<string | null>(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [dataUrl]);

  return (
    <div className="w-full p-4 rounded-lg bg-white dark:bg-gray-900 ">
      {title && (
        <h2 className="text-2xl font-semibold mb-4 dark:text-gray-200">
          {title}
        </h2>
      )}

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <BarChart data={data}>
            {showGrid && <CartesianGrid strokeDasharray="3 3" opacity={0.4} />}

            <XAxis dataKey="category" />
            <YAxis />

            <Tooltip contentStyle={{ background: "#fff", borderRadius: 5 }} />
            <Legend />

            {/* Gradients */}
            <defs>
              {series.map((s) => (
                <linearGradient
                  key={s.dataKey}
                  id={`grad-${s.dataKey}`}
                  x1="0"
                  y1="0"
                  x2="0"
                  y2="1"
                >
                  <stop offset="0%" stopColor={s.color} stopOpacity={0.9} />
                  <stop offset="100%" stopColor={s.color} stopOpacity={0.4} />
                </linearGradient>
              ))}
            </defs>

            {/* Bars */}
            {series.map((s) => (
              <Bar
                key={s.dataKey}
                dataKey={s.dataKey}
                name={s.name}
                stackId={stacked ? "stack" : undefined}
                fill={`url(#grad-${s.dataKey})`}
                barSize={barSize}
                radius={[6, 6, 0, 0]}
                animationDuration={900}
                shape={<CustomBar radius={[6, 6, 0, 0]} />}
              >
                <LabelList
                  dataKey={s.dataKey}
                  position="top"
                  offset={10}
                  style={{
                    fill: "#444",
                    fontWeight: 600,
                    fontSize: 12,
                  }}
                />
              </Bar>
            ))}
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
