import React from "react";
import { Alert, AlertTitle } from "@mui/material";

interface Props {
  title: string;
  message: string;
  severity?: "success" | "error" | "warning" | "info";
  className?: string;
}


export const BaseBanner = ({
  title,
  message,
  severity = "info",
  className = "",
}: Props) => {
  return (
    <Alert
      severity={severity}
      className={`rounded-2xl shadow-md ${className}`}
    >
      <AlertTitle>{title}</AlertTitle>
      {message}
    </Alert>
  );
};
