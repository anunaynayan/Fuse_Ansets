import DonutChartComponent from "@/app/(control-panel)/ansassets/charts/donutchart/components/DonutChart";

export default function TrafficDonut() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      <DonutChartComponent
        title="Traffic Breakdown"
        dataUrl="/assets/pieData.json"
        thickness={60}
      />

      <DonutChartComponent
        title="Traffic Sources"
        dataUrl="/assets/pieData.json"
        centerLabel="Visits"
        colors={["#4caf50", "#03a9f4", "#ff9800", "#e91e63"]}
      />
    </div>
  );
}
