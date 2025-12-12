"use client";

import React, { ReactNode, useEffect } from "react";
import { Fade, IconButton, Backdrop } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface DialogProps {
  open: boolean;
  title?: string;
  content?: ReactNode;
  actions?: ReactNode;
  maxWidth?: number;
  onClose: () => void;
  closeOnOutsideClick?: boolean;
}

export function Dialog({
  open,
  title,
  content,
  actions,
  onClose,
  maxWidth = 500,
  closeOnOutsideClick = true,
}: DialogProps) {

  // --- Disable background scroll ---
  useEffect(() => {
    if (open) document.body.style.overflow = "hidden";
    else document.body.style.overflow = "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [open]);

  // --- Close on ESC key ---
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    if (open) document.addEventListener("keydown", handleEsc);
    return () => document.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open) return null;

  return (
    <Fade in={open} timeout={200}>
      <Backdrop
        open={open}
        sx={{ zIndex: 2000 }}
        onClick={closeOnOutsideClick ? onClose : undefined}
      >
        {/* Dialog Container */}
        <div
          className="bg-white dark:bg-neutral-900 rounded-xl shadow-xl w-[90%] max-h-[90vh] overflow-hidden flex flex-col"
          style={{ maxWidth }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
            <h2 className="text-lg font-semibold text-neutral-800 dark:text-neutral-100">
              {title}
            </h2>

            <IconButton onClick={onClose} size="small">
              <CloseIcon className="text-neutral-700 dark:text-neutral-200" />
            </IconButton>
          </div>

          {/* Content */}
          <div className="p-5 overflow-y-auto text-neutral-700 dark:text-neutral-200">
            {content}
          </div>

          {/* Footer / Actions */}
          {actions && (
            <div className="flex justify-end gap-3 px-4 py-3 border-t border-neutral-200 dark:border-neutral-700 bg-neutral-50 dark:bg-neutral-800">
              {actions}
            </div>
          )}
        </div>
      </Backdrop>
    </Fade>
  );
}
