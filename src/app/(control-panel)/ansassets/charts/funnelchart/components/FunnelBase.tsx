"use client";


import React from "react";
import { ResponsiveContainer, FunnelChart, Funnel, LabelList, Tooltip } from "recharts";


type Props = {
data: any[];
height?: number;
};


export default function FunnelBase({ data, height = 320 }: Props) {
if (!data || data.length === 0) return <div className="p-4">No data found</div>;


return (
<div style={{ width: "100%", height: 450 }}>
<ResponsiveContainer>
<FunnelChart>
<Tooltip />
<Funnel dataKey="value" data={data} isAnimationActive label>
<LabelList
  dataKey="name"
  position="right"
  offset={25}
  fill="#111"
  style={{ fontSize: 14, fontWeight: 500 }}
/>

</Funnel>
</FunnelChart>
</ResponsiveContainer>
</div>
);
}