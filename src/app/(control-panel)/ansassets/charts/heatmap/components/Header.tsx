"use client";

import React from "react";
import { Button, ButtonGroup } from "@mui/material";

type Props = {
  active: "channel" | "campaign" | "calendar";
  onChange: (s: "channel" | "campaign" | "calendar") => void;
};

export default function Header({ active, onChange }: Props) {
  return (
    <header className="flex items-center justify-between">
      <div>
        <h1 className="text-2xl font-semibold">Activity Heatmaps</h1>
        <p className="text-sm ">
          Channel KPIs, campaign clicks over time, and calendar view
        </p>
      </div>

      <ButtonGroup variant="outlined" aria-label="heatmap selector">
        <Button
          onClick={() => onChange("channel")}
          variant={active === "channel" ? "contained" : "outlined"}
          color="primary"
        >
          Channel × Metric
        </Button>
        <Button
          onClick={() => onChange("campaign")}
          variant={active === "campaign" ? "contained" : "outlined"}
          color="primary"
        >
          Campaign × Date
        </Button>
        <Button
          onClick={() => onChange("calendar")}
          variant={active === "calendar" ? "contained" : "outlined"}
          color="primary"
        >
          Calendar
        </Button>
      </ButtonGroup>
    </header>
  );
}
