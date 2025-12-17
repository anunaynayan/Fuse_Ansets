"use client";

import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { CampaignClick } from "../types";

type Props = { data: CampaignClick[] };

// A simplified calendar-style heatmap: dates on x-axis, campaigns on y-axis for the month
export default function HeatmapCalendar({ data }: Props) {
  const dates = useMemo(
    () => Array.from(new Set(data.map((d) => d.date))).sort(),
    [data]
  );
  const campaigns = useMemo(
    () => Array.from(new Set(data.map((d) => d.campaign))),
    [data]
  );

  const seriesData = [] as [number, number, number][];
  for (let i = 0; i < dates.length; i++) {
    for (let j = 0; j < campaigns.length; j++) {
      const found = data.find(
        (d) => d.date === dates[i] && d.campaign === campaigns[j]
      );
      seriesData.push([i, j, found ? found.clicks : 0]);
    }
  }

  const option = {
    tooltip: {
      position: "top",
      formatter: (p: any) =>
        `${campaigns[p.value[1]]}<br/>${dates[p.value[0]]}<br/>${p.value[2]} clicks`,
    },
    xAxis: { type: "category", data: dates },
    yAxis: { type: "category", data: campaigns },
    visualMap: {
      min: 0,
      max: Math.max(...seriesData.map((s) => s[2]), 1),
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: 10,
    },
    series: [
      {
        name: "CalendarHeat",
        type: "heatmap",
        data: seriesData,
        label: { show: false },
      },
    ],
  } as const;

  return (
    <section className="rounded-2xl p-6 shadow">
      <h2 className="text-lg font-medium mb-4">Calendar-style Heatmap</h2>
      <ReactECharts option={option} style={{ height: 420, width: "100%" }} />
    </section>
  );
}
