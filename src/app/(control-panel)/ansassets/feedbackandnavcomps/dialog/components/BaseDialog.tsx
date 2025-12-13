"use client";

import React from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  IconButton,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

export interface BaseDialogProps {
  open: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  actions?: React.ReactNode;
  className?: string;
  showClose?: boolean;
}

export const BaseDialog: React.FC<BaseDialogProps> = ({
  open,
  onClose,
  title,
  children,
  actions,
  className = "",
  showClose = true,
}) => {
  return (
    <Dialog
      open={open}
      onClose={onClose}
      fullWidth
      maxWidth="sm"
      PaperProps={{
        className: `rounded-2xl p-2 ${className}`,
      }}
    >
      <div className="relative">
        <DialogTitle className="text-xl font-semibold pr-10">
          {title}
        </DialogTitle>

        {showClose && (
          <IconButton
            onClick={onClose}
            className="!absolute right-3 top-3 text-gray-500"
          >
            <CloseIcon />
          </IconButton>
        )}
      </div>

      <DialogContent>{children}</DialogContent>

      {actions && <DialogActions className="p-4">{actions}</DialogActions>}
    </Dialog>
  );
};
