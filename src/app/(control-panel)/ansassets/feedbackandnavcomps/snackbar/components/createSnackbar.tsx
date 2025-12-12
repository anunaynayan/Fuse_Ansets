"use client";

import BaseSnackbar, { Position } from "./BaseSnackbar";
import React from "react";

export type VariantOptions = {
  defaultMessage: React.ReactNode;
  defaultClassName: string;
  defaultIcon?: React.ReactNode;
  defaultDuration?: number;
  defaultProgress?: boolean;
};

export type SnackbarCommonProps = {
  visible?: boolean;
  onClose?: () => void;
  position?: Position;
  duration?: number;
  showIcon?: boolean;
  showClose?: boolean;
  message?: React.ReactNode;
  progress?: boolean;
  className?: string;
};

export function createSnackbar(options: VariantOptions) {
  return function Snackbar({
    visible = false,
    onClose,
    position = "top-right",
    duration = options.defaultDuration ?? 3000,
    showIcon = true,
    showClose = true,
    message = options.defaultMessage,
    progress = options.defaultProgress ?? false,
    className = "",
  }: SnackbarCommonProps) {
    return (
      <BaseSnackbar
        visible={visible}
        onClose={onClose}
        position={position}
        duration={duration}
        message={message}
        progress={progress}
        showClose={showClose}
        icon={showIcon ? options.defaultIcon : null}
        className={options.defaultClassName + " " + className}
      />
    );
  };
}
