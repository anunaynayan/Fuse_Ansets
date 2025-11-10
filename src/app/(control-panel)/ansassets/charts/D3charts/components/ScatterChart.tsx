"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface Props {
  data: any[];
  xKey: string;
  yKey: string;
  sizeKey: string;
  color?: string;
}

const ScatterChart = ({
  data,
  xKey,
  yKey,
  sizeKey,
  color = "#f59e0b",
}: Props) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 500;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 40, left: 60 };

    const x = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[xKey])!])
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[yKey])!])
      .range([height - margin.bottom, margin.top]);

    const r = d3
      .scaleSqrt()
      .domain([0, d3.max(data, (d) => d[sizeKey])!])
      .range([5, 20]);

    svg.attr("width", width).attr("height", height);

    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d[xKey]))
      .attr("cy", (d) => y(d[yKey]))
      .attr("r", (d) => r(d[sizeKey]))
      .attr("fill", color)
      .attr("opacity", 0.6);

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }, [data, xKey, yKey, sizeKey, color]);

  return <svg ref={ref}></svg>;
};

export default ScatterChart;
