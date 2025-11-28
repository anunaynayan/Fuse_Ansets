"use client";


import React, { useEffect, useState } from "react";
import AreaBase from "./components/AreaBase";
import { AreaStacked } from "./components/AreaStacked";
import { AreaGradient } from "./components/AreaGradiant";
import { AreaSmooth } from "./components/AreaSmooth";
import { Card, CardContent, CardHeader, Typography } from "@mui/material";
import Header from "./components/Header";

type DataShape = { month: string; uv: number; pv: number; amt?: number };

export default function ChartsPage() {
const [data, setData] = useState<DataShape[]>([]);
const [loading, setLoading] = useState(true);
const [error, setError] = useState<string | null>(null);


useEffect(() => {
let mounted = true;
fetch("/assets/area-data.json")
.then((r) => {
if (!r.ok) throw new Error(`Fetch failed: ${r.status}`);
return r.json();
})
.then((json) => {
if (!mounted) return;
// file structure: { monthly: [...] }
setData(json.monthly || []);
setLoading(false);
})
.catch((err) => {
if (!mounted) return;
setError(String(err));
setLoading(false);
});
return () => {
mounted = false;
};
}, []);


return (
<div className="p-6 space-y-6">
    <Header/>
{loading && <div className="p-4">Loading charts…</div>}
{error && <div className="p-4 text-red-600">Error: {error}</div>}


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<Card className="shadow-md">
<CardHeader title={<Typography variant="h6">Basic Area</Typography>} />
<CardContent>
<AreaBase data={data} />
</CardContent>
</Card>


<Card className="shadow-md">
<CardHeader title={<Typography variant="h6">Stacked Area</Typography>} />
<CardContent>
<AreaStacked data={data} keys={["uv", "pv"]} />
</CardContent>
</Card>


<Card className="shadow-md">
<CardHeader title={<Typography variant="h6">Gradient Area</Typography>} />
<CardContent>
<AreaGradient data={data} />
</CardContent>
</Card>


<Card className="shadow-md">
<CardHeader title={<Typography variant="h6">Smoothed Area</Typography>} />
<CardContent>
<AreaSmooth data={data} />
</CardContent>
</Card>
</div>
</div>
);
}