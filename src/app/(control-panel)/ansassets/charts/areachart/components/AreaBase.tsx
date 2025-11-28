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


type Props = {
data: Array<Record<string, any>>;
dataKey?: string; // primary metric
nameKey?: string; // x-axis key
height?: number;
};


export default function AreaBase({
data,
dataKey = "uv",
nameKey = "month",
height = 240,
}: Props) {
if (!data || data.length === 0) return <div className="p-4">No data</div>;


return (
<div style={{ width: "100%", height }}>
<ResponsiveContainer>
<AreaChart data={data} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
<defs>
<linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
<stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
<stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
</linearGradient>
</defs>
<CartesianGrid strokeDasharray="3 3" />
<XAxis dataKey={nameKey} />
<YAxis />
<Tooltip />
<Legend />
<Area type="monotone" dataKey={dataKey} stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
</AreaChart>
</ResponsiveContainer>
</div>
);
}