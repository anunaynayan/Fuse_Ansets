"use client";

import React, { useMemo, useState } from "react";
import SuccessSnackbarComp from "./SuccessSnackbar";
import ErrorSnackbarComp from "./ErrorSnackbar";
import WarningSnackbarComp from "./WarningSnackbar";
import InfoSnackbarComp from "./InfoSnackbar";
import ProgressSnackbarComp from "./ProgressSnackbar";
import { GlowSnackbar } from "./GlowSnackbar";
import { BorderPulseSnackbar } from "./BorderPulseSnackbar";
import { SlideSnackbar } from "./SlideSnackbar";
import { FloatingSnackbar } from "./FloatingSnackbar";
import {
  Box,
  Button,
  MenuItem,
  Select,
  Switch,
  TextField,
  Typography,
} from "@mui/material";

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

export default function Playground() {
  const [variant, setVariant] = useState<VariantKey>("success");
  const [position, setPosition] = useState("top-right");
  const [duration, setDuration] = useState(3000);
  const [showIcon, setShowIcon] = useState(true);
  const [openKey, setOpenKey] = useState(0);

  // mapping from a variant key to a renderer that receives onClose and duration
  const VariantRenderer = useMemo(() => {
    return (props: { onClose?: () => void }) => {
      const p = { onClose: props.onClose } as any;
      switch (variant) {
        case "success":
          return <SuccessSnackbarComp {...p} />;
        case "error":
          return <ErrorSnackbarComp {...p} />;
        case "warning":
          return <WarningSnackbarComp {...p} />;
        case "info":
          return <InfoSnackbarComp {...p} />;
        case "progress":
          return <ProgressSnackbarComp {...p} />;
        case "glow":
          return <GlowSnackbar {...p} />;
        case "border":
          return <BorderPulseSnackbar {...p} />;
        case "slide":
          return <SlideSnackbar {...p} />;
        case "floating":
          return <FloatingSnackbar {...p} />;
        default:
          return null;
      }
    };
  }, [variant]);

  // small helper to force re-mount variant (so animation runs every time)
  const showOnce = () => setOpenKey((k) => k + 1);

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 rounded-xl border bg-gray-50 dark:bg-neutral-900">
          <Typography variant="subtitle1" className="mb-2">
            Variant
          </Typography>
          <Select
            fullWidth
            value={variant}
            onChange={(e) => setVariant(e.target.value as VariantKey)}
            size="small"
          >
            <MenuItem value="success">Success</MenuItem>
            <MenuItem value="error">Error</MenuItem>
            <MenuItem value="warning">Warning</MenuItem>
            <MenuItem value="info">Info</MenuItem>
            <MenuItem value="progress">Progress</MenuItem>
            <MenuItem value="glow">Glow (advanced)</MenuItem>
            <MenuItem value="border">Border Pulse (advanced)</MenuItem>
            <MenuItem value="slide">Slide (advanced)</MenuItem>
            <MenuItem value="floating">Floating (advanced)</MenuItem>
          </Select>

          <Typography variant="subtitle1" className="mt-4 mb-2">
            Position
          </Typography>
          <Select
            fullWidth
            value={position}
            onChange={(e) => setPosition(e.target.value)}
            size="small"
          >
            <MenuItem value="top-left">Top Left</MenuItem>
            <MenuItem value="top-center">Top Center</MenuItem>
            <MenuItem value="top-right">Top Right</MenuItem>
            <MenuItem value="bottom-left">Bottom Left</MenuItem>
            <MenuItem value="bottom-center">Bottom Center</MenuItem>
            <MenuItem value="bottom-right">Bottom Right</MenuItem>
          </Select>

          <div className="mt-4">
            <Typography variant="subtitle1" className="mb-2">
              Duration (ms) — 0 = sticky
            </Typography>
            <TextField
              size="small"
              type="number"
              value={duration}
              onChange={(e) => setDuration(Number(e.target.value))}
              fullWidth
            />
          </div>

          <div className="flex items-center gap-2 mt-3">
            <Switch
              checked={showIcon}
              onChange={(e) => setShowIcon(e.target.checked)}
            />
            <Typography variant="body2">Show icon</Typography>
          </div>

          <div className="mt-4 flex gap-3">
            <Button variant="contained" onClick={showOnce}>
              Show
            </Button>
            <Button
              variant="outlined"
              onClick={() => {
                // quick action: update input to force remount
                showOnce();
              }}
            >
              Show & Reset
            </Button>
          </div>
        </div>

        <div className="p-4 rounded-xl border bg-white dark:bg-neutral-900 md:col-span-2">
          <Typography variant="subtitle1" className="mb-3">
            Preview
          </Typography>

          <div className="relative h-48">
            {/* Render the selected variant with a unique key so it remounts each show */}
            <div key={openKey} className="absolute inset-0 pointer-events-none">
              {/* We let the VariantRenderer create the actual snackbar. We intentionally do not pass position/duration props
                  because each component has position/duration hard-coded. If you want fully dynamic position/duration, we can
                  adapt BaseSnackbar to accept them via props in each variant. For this playground we mount them in the DOM so
                  you can see animations and styles. */}
              <VariantRenderer
                onClose={() => {
                  /* onClose hides instantly; we do nothing */
                }}
              />
            </div>
          </div>

          <Typography
            variant="caption"
            className="block mt-4 text-gray-600 dark:text-gray-300"
          >
            Tip: use the Show button to preview the currently selected variant.
            Use the Duration field to simulate auto-close timing. For production
            integrate the variant component into your Snackbar provider or call
            it from your page as shown in the docs section.
          </Typography>
        </div>
      </div>
    </div>
  );
}
