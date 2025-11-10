"use client";

import { Button, Typography } from "@mui/material";

type HeaderProps = {
  showPie: boolean;
  toggleChart: () => void;
};

export default function Header({ showPie, toggleChart }: HeaderProps) {
  return (
    <div className="flex items-center justify-between w-full">
      <Typography variant="h5" className="font-bold w-full">
        Apex Charts
      </Typography>
      <div className="flex items-center justify-end gap-4 w-full">
        <Button
          variant="contained"
          color="secondary"
          onClick={toggleChart}
          aria-label={`Toggle to ${showPie ? "area chart" : "pie chart"}`}
        >
          {showPie ? "Show Area Chart" : "Show Pie Chart"}
        </Button>
        <Button
          variant="contained"
          color="secondary"
          onClick={toggleChart}
          aria-label={`Toggle to ${showPie ? "area chart" : "pie chart"}`}
        >
          Documentation
        </Button>
      </div>
    </div>
  );
}
