"use client";

import * as d3 from "d3";
import { useEffect, useRef } from "react";

interface Props {
  data: any[];
  xKey: string;
  yKey: string;
  color?: string;
}

const BubbleMapChart = ({ data, xKey, yKey, color = "#3b82f6" }: Props) => {
  const ref = useRef<SVGSVGElement | null>(null);

  useEffect(() => {
    const svg = d3.select(ref.current);
    svg.selectAll("*").remove();

    const width = 500;
    const height = 300;

    const x = d3
      .scalePoint()
      .domain(data.map((d) => d[xKey]))
      .range([50, width - 50]);

    const y = d3
      .scaleLinear()
      .domain([0, d3.max(data, (d) => d[yKey])!])
      .range([height - 50, 50]);

    const radius = d3
      .scaleSqrt()
      .domain([0, d3.max(data, (d) => d[yKey])!])
      .range([5, 40]);

    svg.attr("width", width).attr("height", height);

    svg
      .selectAll("circle")
      .data(data)
      .enter()
      .append("circle")
      .attr("cx", (d) => x(d[xKey])!)
      .attr("cy", (d) => y(d[yKey]))
      .attr("r", (d) => radius(d[yKey]))
      .attr("fill", color)
      .attr("opacity", 0.6)
      .on("mouseover", (event, d) => {
        const tooltip = d3.select("#tooltip");
        tooltip
          .style("opacity", 1)
          .html(`${d[xKey]}: ${d[yKey]}`)
          .style("left", event.pageX + "px")
          .style("top", event.pageY - 28 + "px");
      })
      .on("mouseout", () => d3.select("#tooltip").style("opacity", 0));
  }, [data, xKey, yKey, color]);

  return <svg ref={ref}></svg>;
};

export default BubbleMapChart;
