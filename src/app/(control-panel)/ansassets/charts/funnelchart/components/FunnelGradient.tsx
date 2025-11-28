"use client";

import React from "react";
import {
  FunnelChart,
  Funnel,
  LabelList,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function FunnelGradient({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <FunnelChart>
          <Tooltip />

          <defs>
            <linearGradient id="funnelGradient" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#4f46e5" />
              <stop offset="100%" stopColor="#06b6d4" />
            </linearGradient>
          </defs>

          <Funnel dataKey="value" data={data} fill="url(#funnelGradient)">
            <LabelList position="right" dataKey="label" fill="#111" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
}
