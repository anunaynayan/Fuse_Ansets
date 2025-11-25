"use client";

import React, { useEffect, useState } from "react";
import { PieChart, Pie, Tooltip, Cell, ResponsiveContainer } from "recharts";

type DonutChartProps = {
  title: string;
  dataUrl: string;
  colors?: string[];
  thickness?: number; // donut thickness control
  centerLabel?: string; // optional custom center text
};

export default function DonutChartComponent({
  title,
  dataUrl,
  colors = ["#1976d2", "#26a69a", "#ff9800", "#e91e63"],
  thickness = 60,
  centerLabel,
}: DonutChartProps) {
  const [data, setData] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  useEffect(() => {
    fetch(dataUrl)
      .then((res) => res.json())
      .then((json) => setData(json));
  }, [dataUrl]);

  const total = data.reduce((a, b) => a + b.value, 0);

  const CustomToolTip = ({ active, payload }: any) => {
    if (!active || !payload || !payload.length) return null;

    const p = payload[0];

    return (
      <div
        style={{
          background: "white",
          padding: "10px 14px",
          borderRadius: 8,
          boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
        }}
      >
        <strong>{p.name}</strong>
        <div>{p.value} visits</div>
      </div>
    );
  };

  return (
    <div style={{ width: "100%", height: 380, position: "relative" }}>
      <h2 className="text-lg font-semibold mb-4">{title}</h2>

      {/* Center Label */}
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -55%)",
          textAlign: "center",
          pointerEvents: "none",
        }}
      >
        <div className="text-xl font-bold">
          {centerLabel ? centerLabel : total}
        </div>
        {!centerLabel && <div className="text-gray-500 text-sm">Total</div>}
      </div>

      <ResponsiveContainer>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={80}
            outerRadius={80 + thickness}
            paddingAngle={3}
            onMouseEnter={(_, i) => setActiveIndex(i)}
            onMouseLeave={() => setActiveIndex(null)}
            activeShape={(props: any) => {
              const {
                cx,
                cy,
                innerRadius,
                outerRadius,
                startAngle,
                endAngle,
                fill,
              } = props;

              return (
                <g>
                  <path
                    d={props.sectorPath}
                    fill={fill}
                    style={{
                      transform: "scale(1.05)",
                      transformOrigin: "center",
                      transition: "0.3s ease-out",
                    }}
                  />
                </g>
              );
            }}
          >
            {data.map((_, index) => (
              <Cell
                key={index}
                fill={colors[index % colors.length]}
                stroke="none"
                style={{
                  transform: activeIndex === index ? "scale(1.05)" : "scale(1)",
                  transformOrigin: "center",
                  transition: "transform 0.3s",
                }}
              />
            ))}
          </Pie>

          <Tooltip content={<CustomToolTip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}
