"use client";

import React, { useState } from "react";
import {
  Button,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

// ✅ import ONLY public snackbar exports
import {
  SuccessSnackbar,
  ErrorSnackbar,
  WarningSnackbar,
  InfoSnackbar,
  GlowSnackbar,
  SlideSnackbar,
  BorderPulseSnackbar,
  FloatingSnackbar,
} from "./snackbars";

import ProgressSnackbar from "./ProgressSnackbar";

type VariantKey =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "progress"
  | "glow"
  | "border"
  | "slide"
  | "floating";

// ✅ single source of truth
const VARIANTS: Record<VariantKey, React.FC<any>> = {
  success: SuccessSnackbar,
  error: ErrorSnackbar,
  warning: WarningSnackbar,
  info: InfoSnackbar,
  progress: ProgressSnackbar,
  glow: GlowSnackbar,
  border: BorderPulseSnackbar,
  slide: SlideSnackbar,
  floating: FloatingSnackbar,
};

export default function Playground() {
  const [variant, setVariant] = useState<VariantKey>("success");
  const [position, setPosition] = useState("top-right");
  const [duration, setDuration] = useState(3000);
  const [showIcon, setShowIcon] = useState(true);
  const [visible, setVisible] = useState(false);

  const ActiveSnackbar = VARIANTS[variant];

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* ================= Controls ================= */}
        <div className="p-4 rounded-xl border bg-gray-50 dark:bg-neutral-900">
          <Typography className="mb-2 font-medium">Variant</Typography>
          <Select
            fullWidth
            size="small"
            value={variant}
            onChange={(e) => setVariant(e.target.value as VariantKey)}
          >
            <MenuItem value="success">Success</MenuItem>
            <MenuItem value="error">Error</MenuItem>
            <MenuItem value="warning">Warning</MenuItem>
            <MenuItem value="info">Info</MenuItem>
            <MenuItem value="progress">Progress</MenuItem>
            <MenuItem value="glow">Glow</MenuItem>
            <MenuItem value="border">Border Pulse</MenuItem>
            <MenuItem value="slide">Slide</MenuItem>
            <MenuItem value="floating">Floating</MenuItem>
          </Select>

          <Typography className="mt-4 mb-2 font-medium">Position</Typography>
          <Select
            fullWidth
            size="small"
            value={position}
            onChange={(e) => setPosition(e.target.value)}
          >
            <MenuItem value="top-left">Top Left</MenuItem>
            <MenuItem value="top-center">Top Center</MenuItem>
            <MenuItem value="top-right">Top Right</MenuItem>
            <MenuItem value="bottom-left">Bottom Left</MenuItem>
            <MenuItem value="bottom-center">Bottom Center</MenuItem>
            <MenuItem value="bottom-right">Bottom Right</MenuItem>
          </Select>

          <Typography className="mt-4 mb-2 font-medium">
            Duration (ms) — 0 = sticky
          </Typography>
          <TextField
            fullWidth
            size="small"
            type="number"
            value={duration}
            onChange={(e) => setDuration(Number(e.target.value))}
          />

          <div className="flex items-center gap-2 mt-3">
            <Switch
              checked={showIcon}
              onChange={(e) => setShowIcon(e.target.checked)}
            />
            <Typography variant="body2">Show icon</Typography>
          </div>

          <div className="mt-4">
            <Button
              fullWidth
              variant="contained"
              onClick={() => setVisible(true)}
            >
              Show Snackbar
            </Button>
          </div>
        </div>

        {/* ================= Preview ================= */}
        <div className="p-4 rounded-xl border bg-white dark:bg-neutral-900 md:col-span-2">
          <Typography className="mb-3 font-medium">Preview</Typography>

          <div className="relative h-48 flex items-center justify-center text-gray-400">
            Click “Show Snackbar” to preview
          </div>

          {/* Snackbar renders at viewport level (correct behavior) */}
          {visible && (
            <ActiveSnackbar
              visible
              position={position}
              duration={duration}
              showIcon={showIcon}
              onClose={() => setVisible(false)}
            />
          )}
        </div>
      </div>
    </div>
  );
}
