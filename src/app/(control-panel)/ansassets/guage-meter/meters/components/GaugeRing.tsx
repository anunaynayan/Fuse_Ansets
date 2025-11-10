"use client";
import React, { useEffect, useState } from "react";
import GaugeChart from "react-gauge-chart";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

type RingData = {
  id: string;
  label: string;
  value: number; // 0-100
  thresholds?: { name: string; min: number; max: number }[];
};

export default function RingGauge() {
  const [data, setData] = useState<RingData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    axios
      .get<RingData>("/assets/ringGauge.json")
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
          {data?.label ?? "Ring Gauge"}
        </Typography>

        {loading && <Typography>Loading...</Typography>}
        {error && <Typography color="error">{error}</Typography>}

        {!loading && !error && data && (
          <div className="flex flex-col items-center py-4">
            <div style={{ width: 260 }}>
              <GaugeChart
                id="gauge-ring"
                nrOfLevels={420}
                arcPadding={0.02}
                percent={percent}
                needleColor="#343a40"
                hideText={true}
              />
              <div className="w-full text-center mt-2">
                <div className="text-2xl font-semibold">{data.value}%</div>
                <div className="text-sm text-gray-500">{data.id}</div>
              </div>
            </div>

            {data.thresholds && (
              <div className="mt-3 w-full">
                <div className="flex gap-2 justify-center flex-wrap">
                  {data.thresholds.map((t) => (
                    <div
                      key={t.name}
                      className="text-xs px-2 py-1 border rounded"
                    >
                      {t.name}: {t.min}-{t.max}
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  );
}
