"use client";

import Header from "./components/Header";
import ColumnChartComponent from "@/app/(control-panel)/ansassets/charts/columnchart/components/ColumnChart";

export default function ColumnExample() {
  return (
    <div className="p-4 space-y-6">
      <Header />

      <div className="grid grid-cols-1 md:grid-cols-1 gap-6 p-6">

        {/* Column Chart */}
        <div className="bg-white dark:bg-gray-900 rounded-2xl shadow-sm border p-6">
          <h2 className="text-lg font-semibold mb-4">
            Monthly Traffic Comparison
          </h2>

          <ColumnChartComponent
            title=""
            dataUrl="/assets/columnData.json"
            series={[
              { name: "Home", dataKey: "home", color: "#1976d2" },
              { name: "Blog", dataKey: "blog", color: "#ef5350" },
              { name: "Pricing", dataKey: "pricing", color: "#66bb6a" },
            ]}
            stacked={false} 
            barSize={35}
            showGrid
          />
        </div>

      </div>
    </div>
  );
}
