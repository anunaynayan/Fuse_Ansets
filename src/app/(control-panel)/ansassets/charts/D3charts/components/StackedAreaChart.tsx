"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface Props {
  data: any[];
  xKey: string;
  yKeys: string[];
  colors?: string[];
}

const StackedAreaChart = ({ data, xKey, yKeys, colors }: Props) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data?.length) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 500;
    const height = 300;
    const margin = { top: 30, right: 30, bottom: 40, left: 60 };

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d[xKey]))
      .range([margin.left, width - margin.right]);

    const y = d3.scaleLinear().range([height - margin.bottom, margin.top]);

    const stack = d3.stack<any>().keys(yKeys)(data);
    y.domain([0, d3.max(stack[stack.length - 1], (d) => d[1])!]).nice();

    const area = d3
      .area<any>()
      .x((d) => x(d.data[xKey])!)
      .y0((d) => y(d[0]))
      .y1((d) => y(d[1]))
      .curve(d3.curveMonotoneX);

    stack.forEach((layer, idx) => {
      svg
        .append("path")
        .datum(layer)
        .attr("fill", colors ? colors[idx] : d3.schemeCategory10[idx])
        .attr("d", area)
        .attr("opacity", 0.6);
    });

    svg
      .append("g")
      .attr("transform", `translate(0,${height - margin.bottom})`)
      .call(d3.axisBottom(x));

    svg
      .append("g")
      .attr("transform", `translate(${margin.left},0)`)
      .call(d3.axisLeft(y));
  }, [data, xKey, yKeys, colors]);

  return <svg ref={ref}></svg>;
};

export default StackedAreaChart;
