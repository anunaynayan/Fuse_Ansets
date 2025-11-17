import PieChartComponent from "@/app/(control-panel)/ansassets/charts/piechart/components/PieChart";

export default function PieExample() {
  return (
    <PieChartComponent
      title="Traffic Distribution"
      dataUrl="/assets/pieData.json"
      colors={["#1976d2", "#ef5350", "#66bb6a", "#ffa726", "#ab47bc"]}
    />
  );
}
