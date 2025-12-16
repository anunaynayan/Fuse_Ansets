"use client";

import { Button, ButtonGroup, Typography } from "@mui/material";
import Link from "next/link";

type MetricsHeaderProps = {
  activeView: "simple" | "animated" | "dropdown";
  onNavigate: (view: "simple" | "animated" | "dropdown") => void;
};

export default function MetricsHeader({
  activeView,
  onNavigate,
}: MetricsHeaderProps) {
  return (
    <div className="flex items-center justify-between w-full mb-6">
      <Typography variant="h5" className="font-bold">
        KPI Metrics Card
      </Typography>

      <div className="flex items-center gap-4">
        <ButtonGroup variant="outlined" aria-label="metrics selector">
          <Button
            variant={activeView === "simple" ? "contained" : "outlined"}
            color="primary"
            onClick={() => onNavigate("simple")}
          >
            Simple
          </Button>

          <Button
            variant={activeView === "animated" ? "contained" : "outlined"}
            color="primary"
            onClick={() => onNavigate("animated")}
          >
            Animated
          </Button>

          <Button
            variant={activeView === "dropdown" ? "contained" : "outlined"}
            color="primary"
            onClick={() => onNavigate("dropdown")}
          >
            Dropdown
          </Button>
        </ButtonGroup>
        <Link href="/ansassets/metric-cards/docs" passHref>
        <Button variant="contained" color="secondary">
          Documentation
        </Button>
      </Link>
      </div>
    </div>
  );
}
