"use client";


import React from "react";
import { ResponsiveContainer, FunnelChart, Funnel, Tooltip, LabelList } from "recharts";


type Props = {
data: any[];
height?: number;
};


export function FunnelComparative({ data, height = 360 }: Props) {
if (!data || data.length === 0) return <div className="p-4">No data found</div>;


return (
<div style={{ width: "100%", height: 450 }}>
<ResponsiveContainer>
<FunnelChart>
<Tooltip />


{/* Current Period */}
<Funnel dataKey="current" data={data} name="Current" fill="#8884d8">
<LabelList
  dataKey="stage"
  position="right"
  offset={25}
  fill="#111"
  style={{ fontSize: 14, fontWeight: 500 }}
/>
</Funnel>


{/* Previous Period */}
<Funnel dataKey="previous" data={data} name="Previous" fill="#82ca9d" />
</FunnelChart>
</ResponsiveContainer>
</div>
);
}