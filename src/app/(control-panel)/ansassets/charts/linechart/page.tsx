"use client";

import Header from "./components/Header";
import LineChartComponent from "@/app/(control-panel)/ansassets/charts/linechart/components/lineChart";

export default function TrendsPage() {
  return (
    <div className="p-4 space-y-6">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-1 max-w-4xl gap-6 p-6">

        {/* Line Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">
            Website Traffic Trends
          </h2>

          <LineChartComponent
            title=""
            dataUrl="/assets/trafficOverTime.json"
            showGrid={true}
            datasets={[
              { name: "Visits", dataKey: "visits", color: "#1976d2" },
              { name: "Signups", dataKey: "signups", color: "#ef5350" }
            ]}
          />
        </div>

      </div>
    </div>
  );
}
