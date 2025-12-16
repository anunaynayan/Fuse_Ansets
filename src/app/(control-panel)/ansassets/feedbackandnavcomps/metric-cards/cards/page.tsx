"use client";

import React, { useEffect, useState } from "react";
import SimpleMetricCard from "./components/SimpleMetricCard";
import GlassMetricCard from "./components/GlassMetricCard";
import DropdownMetricCard from "./components/DropdownMetricCard";
import MetricsHeader from "./components/MetricsHeader";

type Metric = {
  id: string;
  title: string;
  value: number;
  change: number;
  unit?: string;
  color: string;
  icon: string;
};

type CardView = "simple" | "animated" | "dropdown";

export default function MetricsPage() {
  const [metrics, setMetrics] = useState<Metric[]>([]);
  const [view, setView] = useState<CardView>("simple");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch("/assets/metricsData.json");
        if (!res.ok) throw new Error("Failed to load metrics data");
        const data = await res.json();
        setMetrics(data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchData();
  }, []);

  const renderCards = () => {
    switch (view) {
      case "simple":
        return metrics.map((m) => <SimpleMetricCard key={m.id} metric={m} />);
      case "animated":
        return metrics.map((m) => <GlassMetricCard key={m.id} metric={m} />);
      case "dropdown":
        return metrics.map((m) => <DropdownMetricCard key={m.id} metric={m} />);
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen p-6 space-y-10 relative overflow-hidden">
      <MetricsHeader activeView={view} onNavigate={setView} />

      <h2 className="text-2xl font-semibold z-10 relative">
        {view === "simple"
          ? "Simple Metric Cards"
          : view === "animated"
            ? "Animated Metric Cards"
            : "Dropdown Metric Cards"}
      </h2>

      {/* Conditional Background for Glass View */}

      <div
        className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 z-10 relative ${
          view === "animated" ? "p-6 rounded-2xl" : ""
        }`}
      >
        {view === "animated" && (
          <div
            className="absolute inset-0 bg-cover bg-center  -z-10"
            style={{
              backgroundImage: "url('/assets/images/cards/metric.jpg')",
              // backgroundAttachment: "fixed",
            }}
          />
        )}
        {renderCards()}
      </div>
    </div>
  );
}
