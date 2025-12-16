"use client";

import React, { useMemo } from "react";
import ReactECharts from "echarts-for-react";
import type { ChannelMetric } from "../types";

type Props = { data: ChannelMetric[] };

export default function HeatmapChannelMetric({ data }: Props) {
  const xLabels = useMemo(
    () => Array.from(new Set(data.map((d) => d.metric))),
    [data]
  );
  const yLabels = useMemo(
    () => Array.from(new Set(data.map((d) => d.channel))),
    [data]
  );

  const matrix = useMemo(() => {
    return yLabels.map((channel, yi) =>
      xLabels.map((metric, xi) => {
        const found = data.find(
          (d) => d.channel === channel && d.metric === metric
        );
        return found ? found.value : 0;
      })
    );
  }, [data, xLabels, yLabels]);

  // echarts expects [x, y, value]
  const seriesData = [] as [number, number, number][];
  for (let yi = 0; yi < yLabels.length; yi++) {
    for (let xi = 0; xi < xLabels.length; xi++) {
      seriesData.push([xi, yi, matrix[yi][xi]]);
    }
  }

  const maxVal = Math.max(...seriesData.map((s) => s[2]), 1);

  const option = {
    tooltip: {
      position: "top",
      formatter: function (p: any) {
        const metric = xLabels[p.value[0]];
        const channel = yLabels[p.value[1]];
        return `${channel} — ${metric}<br/>Value: ${p.value[2]}`;
      },
    },
    grid: { height: "70%", top: 60 },
    xAxis: { type: "category", data: xLabels, splitArea: { show: true } },
    yAxis: { type: "category", data: yLabels, splitArea: { show: true } },
    visualMap: {
      min: 0,
      max: maxVal,
      calculable: true,
      orient: "horizontal",
      left: "center",
      bottom: 10,
    },
    series: [
      {
        name: "Value",
        type: "heatmap",
        data: seriesData,
        label: { show: true },
        emphasis: { itemStyle: { borderWidth: 2, borderColor: "#fff" } },
      },
    ],
  } as const;

  return (
    <section className="rounded-2xl p-6 shadow">
      <h2 className="text-lg font-medium mb-4">Channel × Metric Heatmap</h2>
      <ReactECharts option={option} style={{ height: 420, width: "100%" }} />
    </section>
  );
}
