"use client";


import React from "react";
import { ResponsiveContainer, AreaChart, Area, XAxis, YAxis, Tooltip, CartesianGrid, Legend } from "recharts";


type Props = { data: any[]; keys?: string[]; nameKey?: string; height?: number };


export function AreaStacked({ data, keys = ["uv", "pv"], nameKey = "month", height = 260 }: Props) {
if (!data || data.length === 0) return <div className="p-4">No data</div>;


return (
<div style={{ width: "100%", height }}>
<ResponsiveContainer>
<AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey={nameKey} />
<YAxis />
<Tooltip />
<Legend />
<Area type="monotone" dataKey={keys[0]} stackId="1" stroke="#8884d8" fill="#8884d8" />
<Area type="monotone" dataKey={keys[1]} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
</AreaChart>
</ResponsiveContainer>
</div>
);
}