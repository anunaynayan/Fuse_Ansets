"use client";
import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface Props {
  data: any[];
  xKey: string;
  yKeys: string[];
  colors?: string[];
}

const MultiLineChart = ({ data, xKey, yKeys, colors }: Props) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    if (!data?.length) return;

    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 500,
      height = 300;
    const margin = { top: 30, right: 30, bottom: 40, left: 60 };

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d[xKey]))
      .range([margin.left, width - margin.right]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d3.max(yKeys.map((k) => d[k])))!])
      .nice()
      .range([height - margin.bottom, margin.top]);

    const line = d3
      .line<any>()
      .x((d) => x(d[xKey])!)
      .y((d, i, nodes) => y(d[yKeys[0]]))
      .curve(d3.curveMonotoneX);

    yKeys.forEach((key, idx) => {
      const l = d3
        .line<any>()
        .x((d) => x(d[xKey])!)
        .y((d) => y(d[key]))
        .curve(d3.curveMonotoneX);

      svg
        .append("path")
        .datum(data)
        .attr("fill", "none")
        .attr("stroke", colors ? colors[idx] : d3.schemeCategory10[idx])
        .attr("stroke-width", 2)
        .attr("d", l);
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

export default MultiLineChart;
