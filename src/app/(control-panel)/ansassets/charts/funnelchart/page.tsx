"use client";


import React, { useEffect, useState } from "react";
import FunnelBase from "./components/FunnelBase";
import { FunnelComparative } from "./components/FunnelComparative";
import { Card, CardHeader, CardContent, Typography } from "@mui/material";
import Header from "./components/Header";


export default function FunnelPage() {
const [base, setBase] = useState([]);
const [comparative, setComparative] = useState([]);
const [loading, setLoading] = useState(true);


useEffect(() => {
fetch("/assets/funel-data.json")
.then((r) => r.json())
.then((json) => {
setBase(json.funnel || []);
setComparative(json.comparative || []);
setLoading(false);
});
}, []);


return (
<div className="p-6 space-y-6">
<Header/>


{loading && <p>Loading…</p>}


<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<Card className="shadow-md">
<CardHeader title={<Typography variant="h6">Basic Funnel Chart</Typography>} />
<CardContent>
<FunnelBase data={base} />
</CardContent>
</Card>


<Card className="shadow-md">
<CardHeader title={<Typography variant="h6">Comparative Funnel (Current vs Previous)</Typography>} />
<CardContent>
<FunnelComparative data={comparative} />
</CardContent>
</Card>
</div>
</div>
);
}