"use client";

import React, { useEffect, useState } from "react";
import {
  PieChart,
  Pie,
  Sector,
  Tooltip,
  TooltipProps,
  ResponsiveContainer,
} from "recharts";

type ActiveShapeProps = {
  cx?: number;
  cy?: number;
  midAngle?: number;
  innerRadius?: number;
  outerRadius?: number;
  startAngle?: number;
  endAngle?: number;
  fill?: string;
  payload?: any;
  percent?: number;
  value?: number;
};

const renderActiveShape = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  startAngle,
  endAngle,
  fill,
  payload,
  percent,
  value,
}: ActiveShapeProps) => {
  const RADIAN = Math.PI / 180;

  const sin = Math.sin(-RADIAN * (midAngle ?? 0));
  const cos = Math.cos(-RADIAN * (midAngle ?? 0));

  const sx = (cx ?? 0) + ((outerRadius ?? 0) + 10) * cos;
  const sy = (cy ?? 0) + ((outerRadius ?? 0) + 10) * sin;

  const mx = (cx ?? 0) + ((outerRadius ?? 0) + 30) * cos;
  const my = (cy ?? 0) + ((outerRadius ?? 0) + 30) * sin;

  const ex = mx + (cos >= 0 ? 1 : -1) * 22;
  const ey = my;

  const textAnchor = cos >= 0 ? "start" : "end";

  return (
    <g>
      <text
        x={cx}
        y={cy}
        dy={8}
        textAnchor="middle"
        className="fill-gray-700 dark:fill-gray-300 font-semibold"
      >
        {payload.name}
      </text>

      {/* Main slice */}
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />

      {/* Outer glowing ring */}
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={(outerRadius ?? 0) + 6}
        outerRadius={(outerRadius ?? 0) + 10}
        fill={fill}
      />

      {/* Connector line */}
      <path
        d={`M${sx},${sy} L${mx},${my} L${ex},${ey}`}
        stroke={fill}
        fill="none"
      />
      <circle cx={ex} cy={ey} r={3} fill={fill} stroke="none" />

      {/* Numbers */}
      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        textAnchor={textAnchor}
        className="fill-gray-700 dark:fill-gray-300"
      >{`Value: ${value}`}</text>

      <text
        x={ex + (cos >= 0 ? 1 : -1) * 12}
        y={ey}
        dy={18}
        textAnchor={textAnchor}
        className="fill-gray-500 dark:fill-gray-400"
      >
        {`Rate ${(percent! * 100).toFixed(2)}%`}
      </text>
    </g>
  );
};

type Props = {
  title?: string;
  dataUrl: string;
  dataKey?: string;
  nameKey?: string;
  color?: string;
};

export default function CustomActivePieChart({
  title,
  dataUrl,
  dataKey = "value",
  nameKey = "name",
  color = "#8884d8",
}: Props) {
  const [data, setData] = useState<any[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    fetch(dataUrl)
      .then((r) => r.json())
      .then((json) => setData(json));
  }, [dataUrl]);

  return (
    <div className="p-4 border rounded-lg bg-white dark:bg-gray-900 shadow-sm w-full ">
      {title && (
        <h2 className="text-xl font-semibold mb-4 dark:text-gray-200">
          {title}
        </h2>
      )}
      <div style={{ width: "100%", height: 350 }}>
        <ResponsiveContainer>
          <PieChart width={400} height={400}>
            <Pie
              {...({
                activeIndex,
                activeShape: renderActiveShape,
              } as any)}
              data={data}
              cx="50%"
              cy="50%"
              innerRadius={50}
              outerRadius={160}
              fill={color}
              dataKey={dataKey}
              nameKey={nameKey}
              onMouseEnter={(_, idx) => setActiveIndex(idx)}
            />
            {/* Tooltip disabled since custom labels already show */}
            <Tooltip content={() => null} />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}
