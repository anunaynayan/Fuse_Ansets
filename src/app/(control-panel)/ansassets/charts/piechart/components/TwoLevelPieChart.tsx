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
  outerDataUrl: string;
  innerDataUrl: string;
  dataKey?: string;
  nameKey?: string;
  colorsOuter?: string[];
  colorsInner?: string[];
};

export default function TwoLevelPieChart({
  title,
  outerDataUrl,
  innerDataUrl,
  dataKey = "value",
  nameKey = "name",
  colorsOuter = ["#1976d2", "#ef5350", "#66bb6a", "#ffa726"],
  colorsInner = ["#ab47bc", "#26c6da", "#8d6e63", "#ff7043"],
}: Props) {
  const [outerData, setOuterData] = useState<any[]>([]);
  const [innerData, setInnerData] = useState<any[]>([]);

  useEffect(() => {
    fetch(outerDataUrl)
      .then((r) => r.json())
      .then(setOuterData);

    fetch(innerDataUrl)
      .then((r) => r.json())
      .then(setInnerData);
  }, [outerDataUrl, innerDataUrl]);

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

            {/* INNER PIE */}
            <Pie
              data={innerData}
              dataKey={dataKey}
              nameKey={nameKey}
              innerRadius={0}
              outerRadius={70}
            >
              {innerData.map((_, i) => (
                <Cell key={i} fill={colorsInner[i % colorsInner.length]} />
              ))}
            </Pie>

            {/* OUTER PIE */}
            <Pie
              data={outerData}
              dataKey={dataKey}
              nameKey={nameKey}
              innerRadius={80}
              outerRadius={120}
            >
              {outerData.map((_, i) => (
                <Cell key={i} fill={colorsOuter[i % colorsOuter.length]} />
              ))}
            </Pie>
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
