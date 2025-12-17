import PieChartComponent from "@/app/(control-panel)/ansassets/charts/piechart/components/PieChart";
import TwoLevelPieChart from "@/app/(control-panel)/ansassets/charts/piechart/components/TwoLevelPieChart";
import CustomActivePieChart from "@/app/(control-panel)/ansassets/charts/piechart/components/CustomActivePieChart";
import Header from "./components/Header";
// import SimpleActivePieChart from "./components/SimpleActivePieChart";

export default function PieExample() {
  return (
    <div className="p-4 space-y-6">
      <Header />
      <div className="grid grid-cols-1 md:grid-cols-2 w-full gap-6 p-6">
        {/* BASIC PIE CHART */}
        <PieChartComponent
          title="Pie Chart"
          dataUrl="/assets/pieData.json"
          colors={["#1976d2", "#ef5350", "#66bb6a", "#ffa726", "#ab47bc"]}
        />

        {/* TWO-LEVEL PIE CHART */}
        <TwoLevelPieChart
          title="Two Level Pie Chart"
          outerDataUrl="/assets/pieOuter.json"
          innerDataUrl="/assets/pieInner.json"
          colorsOuter={["#1976d2", "#ef5350", "#66bb6a", "#ffa726"]}
          colorsInner={["#ab47bc", "#26c6da", "#8d6e63", "#ff7043"]}
        />

        {/* CUSTOM ACTIVE PIE CHART */}
        <CustomActivePieChart
          title="Custom Active Pie Chart"
          dataUrl="/assets/pieData.json"
        />

      </div>
    </div>
  );
}
