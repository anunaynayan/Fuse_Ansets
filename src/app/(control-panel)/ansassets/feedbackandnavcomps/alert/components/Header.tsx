"use client";

import { Button, Typography } from "@mui/material";
import Link from "next/link";
export default function Header() {
  return (
    <div className="flex items-center justify-between w-full">
      <Typography variant="h5" className="font-bold w-full">
        Alerts
      </Typography>
      <Link href="/ansassets/feedbackandnavcomps/alert/docs" passHref>
        <Button variant="contained" color="secondary">
          Documentation
        </Button>
      </Link>
    </div>
  );
}
