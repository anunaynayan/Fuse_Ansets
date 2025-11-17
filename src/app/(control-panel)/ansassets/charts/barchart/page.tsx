"use client";

import Header from "./components/Header";
import BarChartComponent from "@/app/(control-panel)/ansassets/charts/barchart/components/barChart";

export default function TrafficDashboard() {
  return (
    <div className="p-4 space-y-6">
      <Header />

      {/* Grid layout like reference */}
      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-6">

        {/* Vertical Bar Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">
            Vertical Bar Chart
          </h2>

          <BarChartComponent
            title="Traffic by Page"
            orientation="vertical"
            barColor="#1976d2"
            dataUrl="/assets/trafficPage.json"
          />
        </div>

        {/* Horizontal Bar Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">
            Horizontal Bar Chart
          </h2>

          <BarChartComponent
            title="Traffic by Page"
            orientation="horizontal"
            barColor="#4caf50"
            dataUrl="/assets/trafficPage.json"
          />
        </div>

      </div>
    </div>
  );
}
