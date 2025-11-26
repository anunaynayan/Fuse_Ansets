"use client";

import React, { useState, useEffect } from "react";
import {
  PieChart,
  Pie,
  Tooltip,
  Legend,
  Cell,
  ResponsiveContainer,
} from "recharts";

type Props = {
  title?: string;
  dataUrl: string;
  dataKey?: string;
  nameKey?: string;
  colors?: string[];
};

export default function PieChartComponent({
  title,
  dataUrl,
  dataKey = "value",
  nameKey = "name",
  colors = ["#1976d2", "#ef5350", "#66bb6a", "#ffa726", "#ab47bc"],
}: Props) {
  const [data, setData] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((r) => r.json())
      .then((json) => setData(json));
  }, [dataUrl]);

  const onPieEnter = (_: any, index: number) => setActiveIndex(index);
  const onPieLeave = () => setActiveIndex(null);

  return (
    <div className="w-full p-4 border rounded-lg bg-white dark:bg-gray-900 shadow-sm">
      {title && (
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">
          {title}
        </h2>
      )}

      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart>
            <Tooltip />

            <Legend />

            <Pie
              data={data}
              dataKey={dataKey}
              nameKey={nameKey}
              outerRadius={120}
              paddingAngle={3}
              onMouseEnter={onPieEnter}
              onMouseLeave={onPieLeave}
              animationDuration={800}
            >
              {data.map((entry, index) => {
                const isActive = index === activeIndex;

                return (
                  <Cell
                    key={`slice-${index}`}
                    fill={colors[index % colors.length]}
                    stroke="#fff"
                    strokeWidth={isActive ? 3 : 1}
                    style={{
                      transition: "transform 0.25s ease",
                      transform: isActive ? "scale(1.08)" : "scale(1)",
                      transformOrigin: "center",
                      filter: isActive ? "brightness(1.15)" : "brightness(1)",
                    }}
                  />
                );
              })}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
