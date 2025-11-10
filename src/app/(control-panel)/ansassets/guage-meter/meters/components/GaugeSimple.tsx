
"use client";
import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

type SimpleData = {
  id: string;
  label: string;
  value: number; // 0-100
};

export default function SimpleGauge() {
  const [data, setData] = useState<SimpleData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    axios
      .get<SimpleData>("/assets/simpleGauge.json")
      .then((res) => {
        if (!mounted) return;
        setData(res.data);
      })
      .catch((err) => setError(err.message))
      .finally(() => setLoading(false));
    return () => {
      mounted = false;
    };
  }, []);

  return (
    <Card className="shadow-md">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {data?.label ?? "Simple Gauge"}
        </Typography>

        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {!loading && !error && data && (
          <div className="flex justify-center py-4">
            <div style={{ width: 220 }}>
              <GaugeChart
                id="gauge-simple"
                nrOfLevels={20}
                percent={Math.max(0, Math.min(1, data.value / 100))}
                textColor="#000"
              />
              <div className="text-center mt-2 font-medium">{data.value}%</div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
