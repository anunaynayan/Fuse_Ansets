"use client";

import React, { useMemo, useState } from "react";
import { AnimatedDialog } from "../components/AnimatedDialog";
import { MinimalDialog } from "../components/MinimalDialog";
import { GradientDialog } from "../components/GradientDialog";
import { ElevatedDialog } from "../components/ElevatedDialog";
import { GlassDialog } from "../components/GlassDialog";
import { Select, MenuItem, Button, Typography, Switch } from "@mui/material";

type DialogVariant = "animated" | "elevated" | "glass" | "gradient" | "minimal";

export default function DialogPlayground() {
  const [variant, setVariant] = useState<DialogVariant>("animated");
  const [open, setOpen] = useState(false);
  const [showActions, setShowActions] = useState(true);
  const [showClose, setShowClose] = useState(true);

  const DialogComponent = useMemo(() => {
    switch (variant) {
      case "animated":
        return AnimatedDialog;
      case "elevated":
        return ElevatedDialog;
      case "glass":
        return GlassDialog;
      case "gradient":
        return GradientDialog;
      case "minimal":
        return MinimalDialog;
      default:
        return AnimatedDialog;
    }
  }, [variant]);

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {/* Controls */}
      <div className="p-4 rounded-xl border bg-gray-50 dark:bg-neutral-900">
        <Typography className="mb-2">Variant</Typography>

        <Select
          fullWidth
          size="small"
          value={variant}
          onChange={(e) => setVariant(e.target.value as DialogVariant)}
        >
          <MenuItem value="animated">Animated</MenuItem>
          <MenuItem value="elevated">Elevated</MenuItem>
          <MenuItem value="glass">Glass</MenuItem>
          <MenuItem value="gradient">Gradient</MenuItem>
          <MenuItem value="minimal">Minimal</MenuItem>
        </Select>

        <div className="flex items-center gap-2 mt-4">
          <Switch
            checked={showActions}
            onChange={(e) => setShowActions(e.target.checked)}
          />
          <Typography variant="body2">Show actions</Typography>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Switch
            checked={showClose}
            onChange={(e) => setShowClose(e.target.checked)}
          />
          <Typography variant="body2">Show close icon</Typography>
        </div>

        <Button
          fullWidth
          variant="contained"
          className="mt-4"
          onClick={() => setOpen(true)}
        >
          Open Dialog
        </Button>
      </div>

      {/* Preview */}
      <div className="md:col-span-2 p-6 rounded-xl border bg-white dark:bg-neutral-900">
        <Typography className="mb-4">Preview</Typography>

        <DialogComponent
          open={open}
          onClose={() => setOpen(false)}
          title="Dialog Preview"
          showClose={showClose}
          actions={
            showActions && (
              <>
                <Button onClick={() => setOpen(false)}>Cancel</Button>
                <Button variant="contained">Confirm</Button>
              </>
            )
          }
        >
          This is a live preview of the dialog component.
        </DialogComponent>
      </div>
    </div>
  );
}
