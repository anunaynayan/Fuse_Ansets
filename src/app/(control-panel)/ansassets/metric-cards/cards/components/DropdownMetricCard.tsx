"use client";

import {
  Card,
  CardContent,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import * as Icons from "@mui/icons-material";
import { useState } from "react";

type Metric = {
  id: string;
  title: string;
  value: number;
  change: number;
  unit?: string;
  color: string;
  icon: string;
};

export default function DropdownMetricCard({ metric }: { metric: Metric }) {
  const IconComp = Icons[metric.icon as keyof typeof Icons];
  const isPositive = metric.change >= 0;

  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => setAnchorEl(null);

  return (
    <Card sx={{ borderRadius: 3, boxShadow: 2 }}>
      <CardContent className="p-5 relative">
        <div className="flex justify-between items-start">
          <Typography variant="subtitle2" className="text-gray-500">
            {metric.title}
          </Typography>
          <IconButton onClick={handleClick}>
            <MoreVertIcon />
          </IconButton>
          <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
            <MenuItem onClick={handleClose}>View Details</MenuItem>
            <MenuItem onClick={handleClose}>Compare</MenuItem>
            <MenuItem onClick={handleClose}>Remove</MenuItem>
          </Menu>
        </div>

        <div className="flex justify-between items-center mt-2">
          <div>
            <Typography variant="h5" className="font-bold">
              {metric.unit
                ? `${metric.unit}${metric.value}`
                : metric.value.toLocaleString()}
            </Typography>
            <Typography
              variant="body2"
              className={isPositive ? "text-green-500" : "text-red-500"}
            >
              {isPositive ? "▲" : "▼"} {Math.abs(metric.change)}%
            </Typography>
          </div>
          {IconComp && <IconComp sx={{ fontSize: 40, color: metric.color }} />}
        </div>
      </CardContent>
    </Card>
  );
}
