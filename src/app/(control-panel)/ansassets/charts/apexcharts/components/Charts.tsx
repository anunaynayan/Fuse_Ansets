"use client";

import { useMemo } from "react";
import dynamic from "next/dynamic";
import { ApexOptions } from "apexcharts";
import { Card, CardContent, Typography } from "@mui/material";

const Chart = dynamic(() => import("react-apexcharts"), { ssr: false });

type TrafficOverview = { month: string; visitors: number };
type TrafficSource = { label: string; value: number };

type ChartsProps = {
  showPie: boolean;
  overviewData: TrafficOverview[];
  sourceData: TrafficSource[];
};

export default function Charts({
  showPie,
  overviewData,
  sourceData,
}: ChartsProps) {
  const areaOptions: ApexOptions = useMemo(
    () => ({
      chart: { type: "area", toolbar: { show: false },},
      xaxis: { categories: overviewData.map((d) => d.month) },
      dataLabels: { enabled: false },
      stroke: { curve: "smooth" },
      colors: ["#8B5CF6"],
      fill: {
        type: "gradient",
        gradient: { opacityFrom: 0.6, opacityTo: 0.1, stops: [0, 100] },
      },
    }),
    [overviewData]
  );

  const areaSeries = useMemo(
    () => [{ name: "Visitors", data: overviewData.map((d) => d.visitors) }],
    [overviewData]
  );

  const pieOptions: ApexOptions = useMemo(
    () => ({
      chart: { type: "donut",},
      labels: sourceData.map((d) => d.label),
      colors: ["#8B5CF6", "#EC4899", "#22D3EE", "#10B981"],
      legend: { position: "bottom" },
      plotOptions: {
        pie: {
          donut: {
            size: "60%",
            labels: {
              show: true,
              total: {
                show: true,
                label: "Total",
                formatter: (w) =>
                  w.globals.seriesTotals.reduce(
                    (a: number, b: number) => a + b,
                    0
                  ),
              },
            },
          },
        },
      },
    }),
    [sourceData]
  );

  const pieSeries = useMemo(() => sourceData.map((d) => d.value), [sourceData]);
  const chartTitle = showPie ? "Traffic Sources" : "Monthly Visitors";

  return (
    <Card >
      <CardContent>
        <Typography variant="h6" className=" mb-4 text-start">
          {chartTitle}
        </Typography>
        {showPie ? (
          <Chart
            key={JSON.stringify(sourceData)}
            options={pieOptions}
            series={pieSeries}
            type="donut"
            height={400}
          />
        ) : (
          <Chart
            key={JSON.stringify(overviewData)}
            options={areaOptions}
            series={areaSeries}
            type="area"
            height={400}
          />
        )}
      </CardContent>
    </Card>
  );
}
