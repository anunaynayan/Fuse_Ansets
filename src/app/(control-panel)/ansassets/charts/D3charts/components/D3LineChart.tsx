"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface ChartProps {
  data: any[];
  xKey: string;
  yKey: string;
  color?: string;
}

const D3LineChart = ({ data, xKey, yKey, color = "#3b82f6" }: ChartProps) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data?.length) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 500;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 40, left: 60 };

    const x = d3
      .scaleBand()
      .domain(data.map((d) => d[xKey]))
      .range([margin.left, width - margin.right])
      .padding(0.2);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[yKey])!])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line<any>()
      .x((d) => (x(d[xKey]) ?? 0) + x.bandwidth() / 2)
      .y((d) => y(d[yKey]))
      .curve(d3.curveMonotoneX);

    svg
      .attr("width", width)
      .attr("height", height)
      .append("path")
      .datum(data)
      .attr("fill", "none")
      .attr("stroke", color)
      .attr("stroke-width", 2)
      .attr("d", line);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }, [data, xKey, yKey, color]);

  return <svg ref={ref} />;
};

export default D3LineChart;
