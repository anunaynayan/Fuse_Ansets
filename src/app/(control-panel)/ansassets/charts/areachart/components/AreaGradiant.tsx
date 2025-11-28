"use client";


import React from "react";
import {
ResponsiveContainer,
AreaChart,
Area,
XAxis,
YAxis,
CartesianGrid,
Tooltip,
Legend,
} from "recharts";


type Props = { data: any[]; nameKey?: string; height?: number };


export function AreaGradient({ data, nameKey = "month", height = 240 }: Props) {
if (!data || data.length === 0) return <div className="p-4">No data</div>;


return (
<div style={{ width: "100%", height }}>
<ResponsiveContainer>
<AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
<defs>
<linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#ffc658" stopOpacity={0.9} />
<stop offset="95%" stopColor="#ffc658" stopOpacity={0.1} />
</linearGradient>
</defs>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey={nameKey} />
<YAxis />
<Tooltip />
<Legend />
<Area type="monotone" dataKey="pv" stroke="#ffc658" fillOpacity={1} fill="url(#colorPv)" />
</AreaChart>
</ResponsiveContainer>
</div>
);
}