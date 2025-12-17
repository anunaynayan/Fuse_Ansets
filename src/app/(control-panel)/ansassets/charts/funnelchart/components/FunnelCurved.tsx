"use client";

import React from "react";
import {
  FunnelChart,
  Funnel,
  Tooltip,
  ResponsiveContainer,
  LabelList,
} from "recharts";

export default function FunnelCurved({ data }) {
  if (!data || data.length === 0) return null;

  return (
    <div className="w-full h-80">
      <ResponsiveContainer>
        <FunnelChart>
          <Tooltip />

          <Funnel
            dataKey="value"
            data={data}
            shape="smooth"
            fill="#8b5cf6"
          >
            <LabelList position="right" dataKey="label" fill="#111" />
          </Funnel>
        </FunnelChart>
      </ResponsiveContainer>
    </div>
  );
}
