"use client";

import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { CampaignClick } from "../types";

type Props = { data: CampaignClick[] };

export default function HeatmapCampaignDate({ data }: Props) {
  const campaigns = useMemo(
    () => Array.from(new Set(data.map((d) => d.campaign))),
    [data]
  );
  const dates = useMemo(
    () => Array.from(new Set(data.map((d) => d.date))).sort(),
    [data]
  );

  const seriesData = useMemo(() => {
    return data.map((d) => [
      dates.indexOf(d.date),
      campaigns.indexOf(d.campaign),
      d.clicks,
    ]);
  }, [data, dates, campaigns]);

  const option = {
    tooltip: {
      position: "top",
      formatter: (p: any) =>
        `${campaigns[p.value[1]]}<br/>${dates[p.value[0]]}<br/>${p.value[2]} clicks`,
    },
    grid: { height: "65%", top: 60 },
    xAxis: { type: "category", data: dates, axisLabel: { rotate: 30 } },
    yAxis: { type: "category", data: campaigns, splitArea: { show: true } },
    visualMap: {
      min: 0,
      max: Math.max(...data.map((d) => d.clicks), 1),
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: 10,
    },
    series: [
      {
        name: "Clicks",
        type: "heatmap",
        data: seriesData,
        label: { show: true },
        emphasis: {
          itemStyle: { shadowBlur: 10, shadowColor: "rgba(0,0,0,0.5)" },
        },
      },
    ],
  } as const;

  return (
    <section className="rounded-2xl p-6 shadow">
      <h2 className="text-lg font-medium mb-4">
        Campaign × Date Heatmap (clicks)
      </h2>
      <ReactECharts option={option} style={{ height: 480, width: "100%" }} />
    </section>
  );
}
