"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { CircularProgress, Alert } from "@mui/material";
import Header from "./components/Header";
import Charts from "./components/Charts";
import Metrics from "./components/Metrics";
import TrafficTable from "./components/TrafficTable";
import { Skeleton } from "@mui/material";

type MetricsType = {
  totalVisitors: { value: number; change: number };
  pageViews: { value: number; change: number };
  conversionRate: { value: number; change: number };
  bounceRate: { value: number; change: number };
};

type TrafficOverview = { month: string; visitors: number };
type TrafficSource = { label: string; value: number };
type Traffic = { timestamp: string; users: number; responseTime: number };

export default function Dashboard() {
  const [showPie, setShowPie] = useState(false);
  const [metrics, setMetrics] = useState<MetricsType | null>(null);
  const [overviewData, setOverviewData] = useState<TrafficOverview[]>([]);
  const [sourceData, setSourceData] = useState<TrafficSource[]>([]);
  const [traffic, setTraffic] = useState<Traffic[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showCharts, setShowCharts] = useState(false);

  useEffect(() => {
    Promise.all([
      axios.get("/assets/mock-data.json"),
      axios.get("/assets/traffic.json"),
    ])
      .then(([mockRes, trafficRes]) => {
        setMetrics(mockRes.data.metrics);
        setOverviewData(mockRes.data.trafficOverview);
        setSourceData(mockRes.data.trafficSources);
        setTraffic(trafficRes.data);
        setError(null);
        setShowCharts(true);
      })

      .catch(() => setError("Failed to load dashboard data."))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen">
        <CircularProgress />
      </div>
    );
  }

  if (error) {
    return <Alert severity="error">{error}</Alert>;
  }

  return (
    <div className="p-4 space-y-6 max-w-7xl ">
      <Header showPie={showPie} toggleChart={() => setShowPie(!showPie)} />

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {showCharts ? (
          <Charts
            showPie={showPie}
            overviewData={overviewData}
            sourceData={sourceData}
          />
        ) : (
          <Skeleton variant="rectangular" width="100%" height={400} />
        )}
        <div className="space-y-6">
          {metrics && <Metrics metrics={metrics} />}
          <TrafficTable data={traffic} />
        </div>
      </div>
    </div>
  );
}
