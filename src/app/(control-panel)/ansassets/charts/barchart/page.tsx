import BarChartComponent from "@/app/(control-panel)/ansassets/charts/barchart/components/barChart";
import Header from "./components/Header";
export default function TrafficDashboard() {
  return (
    <div className="grid geid-cols-1 gap-4">
      <Header/>
      <BarChartComponent
        title="Traffic By Page"
        orientation="vertical"
        barColor="#1976d2"
        dataUrl="/assets/trafficPage.json"
      />
      <BarChartComponent
        title="Traffic By Page (Horizontal)"
        orientation="horizontal"
        barColor="#4caf50"
        dataUrl="/assets/trafficPage.json"
      />
    </div>
  );
}
