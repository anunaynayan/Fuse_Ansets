import LineChartComponent from "@/app/(control-panel)/ansassets/charts/linechart/components/lineChart";

export default function TrendsPage() {
  return (
    <LineChartComponent
      title="Website Traffic Trends"
      dataUrl="/assets/trafficOverTime.json"
      showGrid={true}
      datasets={[
        { name: "Visits", dataKey: "visits", color: "#1976d2" },
        { name: "Signups", dataKey: "signups", color: "#ef5350" }
      ]}
    />
  );
}
