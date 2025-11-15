import ColumnChartComponent from "@/app/(control-panel)/ansassets/charts/columnchart/components/ColumnChart";

export default function ColumnExample() {
  return (
    <ColumnChartComponent
      title="Monthly Traffic Comparison"
      dataUrl="/assets/columnData.json"
      series={[
        { name: "Home", dataKey: "home", color: "#1976d2" },
        { name: "Blog", dataKey: "blog", color: "#ef5350" },
        { name: "Pricing", dataKey: "pricing", color: "#66bb6a" }
      ]}
      stacked={false}   // change to true for stacked bars
      barSize={35}
      showGrid
    />
  );
}
