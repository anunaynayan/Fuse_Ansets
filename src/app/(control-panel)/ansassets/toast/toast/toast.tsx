
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import ErrorIcon from "@mui/icons-material/Error";
import InfoIcon from "@mui/icons-material/Info";
import WarningAmberIcon from "@mui/icons-material/WarningAmber";
import CloseIcon from "@mui/icons-material/Close";
import { IconButton, Box, Typography } from "@mui/material";
import { Slide } from "@mui/material";
import {
  closeSnackbar,
  enqueueSnackbar,
  SnackbarKey,
 
} from "notistack";

const isDark =
  typeof window !== "undefined" &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;

const colors = {
  success: isDark
    ? "linear-gradient(90deg,#166534,#15803d)"
    : "linear-gradient(90deg,#22c55e,#16a34a)",

  error: isDark
    ? "linear-gradient(90deg,#7f1d1d,#991b1b)"
    : "linear-gradient(90deg,#ef4444,#dc2626)",

  warning: isDark
    ? "linear-gradient(90deg,#854d0e,#a16207)"
    : "linear-gradient(90deg,#f59e0b,#d97706)",

  info: isDark
    ? "linear-gradient(90deg,#1e40af,#1d4ed8)"
    : "linear-gradient(90deg,#3b82f6,#2563eb)",
};

export function ToastComponent({
  message,
  icon,
  bg,
}: {
  message: string;
  icon: React.ReactNode;
  bg: string;
}) {
  return (
    <Box
      sx={{
        background: bg,
        display: "flex",
        alignItems: "center",
        gap: "10px",
        padding: "12px 16px",
        borderRadius: "10px",
        color: "#fff",
        minWidth: "260px",
        boxShadow: "0 4px 12px rgba(0,0,0,0.2)",
        animation: "fadeSlide 0.4s ease-out",

        "@keyframes fadeSlide": {
          from: { opacity: 0, transform: "translateX(30px)" },
          to: { opacity: 1, transform: "translateX(0)" },
        },
      }}
    >
      {icon}
      <Typography sx={{ fontWeight: 500 }}>{message}</Typography>
    </Box>
  );
}

const iconMap = {
  success: <CheckCircleIcon />,
  error: <ErrorIcon />,
  warning: <WarningAmberIcon />,
  info: <InfoIcon />,
};

const showToast = (
  message: string,
  variant: keyof typeof colors,
  options?: {
    position?: "top-left" | "top-right" | "bottom-left" | "bottom-right";
    duration?: number;
  }
) => {
  const anchor = {
    "top-left": { vertical: "top", horizontal: "left" },
    "top-right": { vertical: "top", horizontal: "right" },
    "bottom-left": { vertical: "bottom", horizontal: "left" },
    "bottom-right": { vertical: "bottom", horizontal: "right" },
  }[options?.position || "bottom-right"];

  enqueueSnackbar(message, {
    anchorOrigin: anchor as any,
    autoHideDuration: options?.duration || 3000,
    TransitionComponent: Slide,

    content: (key: SnackbarKey) => (
      <Box sx={{ position: "relative" }}>
        <ToastComponent
          message={message}
          icon={iconMap[variant]}
          bg={colors[variant]}
        />

        <IconButton
          size="small"
          onClick={() => closeSnackbar(key)}
          sx={{
            position: "absolute",
            top: 2,
            right: 2,
            color: "#fff",
            "&:hover": { color: "#ddd" },
          }}
        >
          <CloseIcon fontSize="small" />
        </IconButton>
      </Box>
    ),
  });
};

export const Toast = {
  success: (msg: string, options?: any) =>
    showToast(msg, "success", options),
  error: (msg: string, options?: any) =>
    showToast(msg, "error", options),
  warning: (msg: string, options?: any) =>
    showToast(msg, "warning", options),
  info: (msg: string, options?: any) => showToast(msg, "info", options),
  closeAll: () => closeSnackbar(),
};
