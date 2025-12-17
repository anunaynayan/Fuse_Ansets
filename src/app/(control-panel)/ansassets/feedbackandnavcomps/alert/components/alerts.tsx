"use client";

import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import WarningAmberOutlinedIcon from "@mui/icons-material/WarningAmberOutlined";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";

import { createAlert } from "./createAlert";

/* ---------------------------------------
   Standard alerts
---------------------------------------- */

export const SuccessAlert = createAlert({
  defaultMessage: "Operation successful",
  defaultClassName:
    "bg-emerald-50 text-emerald-800 border-emerald-200",
  defaultIcon: <CheckCircleOutlineIcon />,
});

export const ErrorAlert = createAlert({
  defaultMessage: "Something went wrong",
  defaultClassName:
    "bg-rose-50 text-rose-800 border-rose-200",
  defaultIcon: <ErrorOutlineIcon />,
});

export const WarningAlert = createAlert({
  defaultMessage: "Please check your inputs",
  defaultClassName:
    "bg-amber-50 text-amber-800 border-amber-200",
  defaultIcon: <WarningAmberOutlinedIcon />,
});

export const InfoAlert = createAlert({
  defaultMessage: "Informational message",
  defaultClassName:
    "bg-sky-50 text-sky-800 border-sky-200",
  defaultIcon: <InfoOutlinedIcon />,
});

/* ---------------------------------------
   Advanced / style variants
---------------------------------------- */

export const GlowAlert = createAlert({
  defaultMessage: "Glow alert",
  defaultClassName:
    "bg-emerald-600 text-white border-emerald-400 shadow-[0_6px_30px_rgba(16,185,129,0.35)]",
  defaultIcon: <CheckCircleOutlineIcon />,
});

export const OutlineAlert = createAlert({
  defaultMessage: "Outline alert",
  defaultClassName:
    "bg-transparent text-gray-800 border-gray-300 dark:text-gray-200",
});
