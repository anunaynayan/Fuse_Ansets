"use client";
import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

type SemiData = {
  id: string;
  label: string;
  value: number; // 0-100
  minLabel?: string;
  maxLabel?: string;
};

export default function SemiGauge() {
  const [data, setData] = useState<SemiData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    axios
      .get<SemiData>("/assets/semiGauge.json")
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

  const percent = data ? Math.max(0, Math.min(1, data.value / 100)) : 0;

  return (
    <Card className="shadow-md">
      <CardContent>
        <Typography variant="h6" gutterBottom>
          {data?.label ?? "Semicircle Gauge"}
        </Typography>

        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {!loading && !error && data && (
          <div className="flex flex-col items-center py-4">
            <div style={{ width: 300 }}>
              <GaugeChart
                id="gauge-semi"
                nrOfLevels={30}
                arcWidth={0.3}
                percent={percent}
                hideText={true}
              />
              <div className="flex justify-between mt-2 text-xs text-gray-600">
                <div>{data.minLabel ?? "Min"}</div>
                <div>{data.maxLabel ?? "Max"}</div>
              </div>
              <div className="text-center mt-2 font-semibold">
                {data.value}%
              </div>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
