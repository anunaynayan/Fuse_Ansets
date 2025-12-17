/* eslint-disable prettier/prettier */
"use client";
import React from "react";
import { Box, Typography, Button, Stack } from "@mui/material";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

interface ActionButton {
  label: string;
  onClick: () => void;
  color?: "primary" | "success" | "info" | "warning" | "error";
}

interface SuccessBoxProps {
  title?: string;
  message?: string;
  icon?: React.ReactNode; 
  iconColor?: string; 
  iconSize?: number;

 
  confirmLabel?: string;
  cancelLabel?: string;
  onConfirm?: () => void;
  onCancel?: () => void;

  variant?: "success" | "error" | "warning" | "info";


  autoClose?: number; // milliseconds

 
  actions?: ActionButton[];
  children?: React.ReactNode;
}

const SuccessBox: React.FC<SuccessBoxProps> = ({
  title = "Success!",
  message = "Operation completed successfully!",


  icon = <CheckCircleOutlineIcon sx={{ fontSize: 70, color: "success.main", mb: 2 }} />,
  iconColor,
  iconSize,

  
  confirmLabel,
  cancelLabel,
  onConfirm,
  onCancel,

 
  variant = "success",


  autoClose,

  actions = [],
  children,
}) => {
 
  React.useEffect(() => {
    if (autoClose) {
      const timer = setTimeout(() => {
        onConfirm?.(); // auto close event triggers confirm
      }, autoClose);

      return () => clearTimeout(timer);
    }
  }, [autoClose, onConfirm]);

  return (
    <Box
      role="alert"
      sx={{
        textAlign: "center",
        p: 4,
        borderRadius: 4,
        boxShadow: 5,
        width: { xs: "90%", sm: "100%" },
        mx: "auto",
        backgroundColor: "background.paper",
      }}
    >
      {/* ICON OVERRIDE SYSTEM */}
      <Box sx={{ mb: 2 }}>
        {React.cloneElement(icon as any, {
          sx: {
            fontSize: iconSize ?? 70,
            color: iconColor ?? `${variant}.main`,
            mb: 2,
          },
        })}
      </Box>

      <Typography variant="h5" fontWeight={700}>
        {title}
      </Typography>

      <Typography variant="body1" sx={{ mt: 1, mb: 3, color: "text.secondary" }}>
        {message}
      </Typography>

      {children}

      {/* CONFIRM + CANCEL BUTTONS */}
      {(confirmLabel || cancelLabel) && (
        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          {cancelLabel && (
            <Button
              variant="outlined"
              color="error"
              onClick={onCancel}
              sx={{ borderRadius: 3, px: 3 }}
            >
              {cancelLabel}
            </Button>
          )}
          {confirmLabel && (
            <Button
              variant="contained"
              color="success"
              onClick={onConfirm}
              sx={{ borderRadius: 3, px: 3 }}
            >
              {confirmLabel}
            </Button>
          )}
        </Stack>
      )}

      {/* Normal action buttons */}
      {actions.length > 0 && (
        <Stack direction="row" spacing={2} justifyContent="center" mt={2}>
          {actions.map((action, index) => (
            <Button
              key={index}
              variant="contained"
              color={action.color ?? "success"}
              onClick={action.onClick}
              sx={{ borderRadius: 3, px: 3 }}
            >
              {action.label}
            </Button>
          ))}
        </Stack>
      )}
    </Box>
  );
};

export default SuccessBox;
