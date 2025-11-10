"use client";

import { Button, Typography } from "@mui/material";

export default function Header() {
  return (
    <div className="flex items-center justify-between w-full">
      <Typography variant="h5" className="font-bold w-full">
        D3.js Charts
      </Typography>
      <div className="flex items-center justify-end gap-4 w-full">
        <Button
          variant="contained"
          color="secondary"
          // onClick={toggleChart}
          // aria-label={`Toggle to ${showPie ? "area chart" : "pie chart"}`}
        >
          Documentation
        </Button>
      </div>
    </div>
  );
}
