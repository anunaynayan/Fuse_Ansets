"use client";

import React, { useMemo, useState } from "react";
import {
  SuccessAlert,
  ErrorAlert,
  WarningAlert,
  InfoAlert,
  GlowAlert,
  OutlineAlert,
} from "../components/alerts";
import { AnimatePresence, motion } from "framer-motion";
import {
  Select,
  MenuItem,
  Switch,
  Button,
  Typography,
} from "@mui/material";

type VariantKey =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "glow"
  | "outline";

type AnimationKey = "fade" | "slide" | "scale" | "bounce";

const animations: Record<AnimationKey, any> = {
  fade: { initial: { opacity: 0 }, animate: { opacity: 1 } },
  slide: { initial: { x: 40, opacity: 0 }, animate: { x: 0, opacity: 1 } },
  scale: { initial: { scale: 0.95, opacity: 0 }, animate: { scale: 1, opacity: 1 } },
  bounce: {
    initial: { y: -10, opacity: 0 },
    animate: { y: 0, opacity: 1 },
    transition: { type: "spring", stiffness: 260 },
  },
};

export default function AlertPlayground() {
  const [variant, setVariant] = useState<VariantKey>("success");
  const [animation, setAnimation] = useState<AnimationKey>("fade");
  const [dismissible, setDismissible] = useState(false);
  const [showIcon, setShowIcon] = useState(true);
  const [visible, setVisible] = useState(false);

  const AlertComponent = useMemo(() => {
    switch (variant) {
      case "success":
        return SuccessAlert;
      case "error":
        return ErrorAlert;
      case "warning":
        return WarningAlert;
      case "info":
        return InfoAlert;
      case "glow":
        return GlowAlert;
      case "outline":
        return OutlineAlert;
      default:
        return SuccessAlert;
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
          onChange={(e) => setVariant(e.target.value as VariantKey)}
        >
          <MenuItem value="success">Success</MenuItem>
          <MenuItem value="error">Error</MenuItem>
          <MenuItem value="warning">Warning</MenuItem>
          <MenuItem value="info">Info</MenuItem>
          <MenuItem value="glow">Glow</MenuItem>
          <MenuItem value="outline">Outline</MenuItem>
        </Select>

        <Typography className="mt-4 mb-2">Animation</Typography>
        <Select
          fullWidth
          size="small"
          value={animation}
          onChange={(e) => setAnimation(e.target.value as AnimationKey)}
        >
          <MenuItem value="fade">Fade</MenuItem>
          <MenuItem value="slide">Slide</MenuItem>
          <MenuItem value="scale">Scale</MenuItem>
          <MenuItem value="bounce">Bounce</MenuItem>
        </Select>

        <div className="flex items-center gap-2 mt-4">
          <Switch
            checked={dismissible}
            onChange={(e) => setDismissible(e.target.checked)}
          />
          <Typography variant="body2">Dismissible</Typography>
        </div>

        <div className="flex items-center gap-2 mt-2">
          <Switch
            checked={showIcon}
            onChange={(e) => setShowIcon(e.target.checked)}
          />
          <Typography variant="body2">Show icon</Typography>
        </div>

        <div className="mt-4">
          <Button fullWidth variant="contained" onClick={() => setVisible(true)}>
            Show Alert
          </Button>
        </div>
      </div>

      {/* Preview */}
      <div className="md:col-span-2 p-6 rounded-xl border bg-white dark:bg-neutral-900">
        <Typography className="mb-4">Preview</Typography>

        <AnimatePresence>
          {visible && (
            <motion.div
              {...animations[animation]}
              exit={{ opacity: 0 }}
            >
              <AlertComponent
                dismissible={dismissible}
                showIcon={showIcon}
                onClose={() => setVisible(false)}
              />
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
