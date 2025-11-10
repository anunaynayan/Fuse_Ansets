"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import { Card, CardContent, Typography } from "@mui/material";

import MultiLineChart from "./components/MultiLineChart";
import StackedAreaChart from "./components/StackedAreaChart";
import BubbleMapChart from "./components/BubbleMapChart";
import ScatterChart from "./components/ScatterChart";
import Header from "./components/Header";

export default function LoadTestingDashboard() {
  const [data, setData] = useState<any>(null);

  useEffect(() => {
    axios.get("/assets/d3-data.json").then((res) => setData(res.data));
  }, []);

  if (!data) return <div className="p-6 text-gray-500">Loading...</div>;

  return (
    <div className="p-4 space-y-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 p-6">
        {/* Multi-line Chart: Active Users / Requests / Errors */}
        <Card className="shadow-md rounded-2xl">
          <CardContent>
            <Typography variant="h6" className="mb-4 font-semibold">
              Active Users / Requests / Errors
            </Typography>
            <MultiLineChart
              data={data.timeSeries}
              xKey="time"
              yKeys={["activeUsers", "requests", "errors"]}
              colors={["#3b82f6", "#10b981", "#f59e0b"]}
            />
          </CardContent>
        </Card>

        {/* Stacked Area Chart: Load over time */}
        <Card className="shadow-md rounded-2xl">
          <CardContent>
            <Typography variant="h6" className="mb-4 font-semibold">
              Load Over Time
            </Typography>
            <StackedAreaChart
              data={data.timeSeries}
              xKey="time"
              yKeys={["activeUsers", "requests", "errors"]}
              colors={["#3b82f6", "#10b981", "#f59e0b"]}
            />
          </CardContent>
        </Card>

        {/* Bubble Map: User Locations */}
        <Card className="shadow-md rounded-2xl">
          <CardContent>
            <Typography variant="h6" className="mb-4 font-semibold">
              User Locations
            </Typography>
            <BubbleMapChart
              data={data.locations}
              xKey="region"
              yKey="users"
              color="#6366f1"
            />
            <div
              id="tooltip"
              style={{
                position: "absolute",
                opacity: 0,
                background: "#fff",
                padding: "5px",
                borderRadius: "4px",
                pointerEvents: "none",
                boxShadow: "0px 0px 5px rgba(0,0,0,0.2)",
              }}
            ></div>
          </CardContent>
        </Card>

        {/* Scatter Chart: Users vs Requests */}
        <Card className="shadow-md rounded-2xl">
          <CardContent>
            <Typography variant="h6" className="mb-4 font-semibold">
              Users vs Requests
            </Typography>
            <ScatterChart
              data={data.timeSeries}
              xKey="activeUsers"
              yKey="requests"
              sizeKey="errors"
              color="#f43f5e"
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
