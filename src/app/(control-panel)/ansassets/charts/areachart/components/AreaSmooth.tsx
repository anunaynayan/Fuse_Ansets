"use client";


import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";


type Props = { data: any[]; nameKey?: string; height?: number };


export function AreaSmooth({ data, nameKey = "month", height = 220 }: Props) {
if (!data || data.length === 0) return <div className="p-4">No data</div>;


return (
<div style={{ width: "100%", height }}>
<ResponsiveContainer>
<AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey={nameKey} />
<YAxis />
<Tooltip />
<Area type="basis" dataKey="uv" stroke="#8884d8" strokeWidth={2} fillOpacity={0.3} fill="#8884d8" />
</AreaChart>
</ResponsiveContainer>
</div>
);
}