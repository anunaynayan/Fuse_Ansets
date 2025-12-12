"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import { Toast } from "../toast/toast";



export default function TooltipDocs() {
  return (
    <DocsLayout>
      {/* ------------------------ DESCRIPTION ------------------------ */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        The Toast Component Library provides a simple and customizable way to display
        toast notifications in your  applications. It leverages the power of
        Material-UI and Notistack to deliver sleek and responsive toasts that enhance
        user experience by providing timely feedback and information.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Tooltip component:
        </Typography>

        <Typography variant="h6" className="font-semibold mb-2 text-gray-800 dark:text-gray-100">
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>@mui/icons-material</li>
          <li>react</li>
          <li>notistack</li>
        </ul>

        <Typography variant="body1" className="mt-4 mb-4 text-gray-600 dark:text-gray-100">
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material framer-motion clsx`}
        />
      </section>

      {/* ------------------------ TOOLTIP SECTION ------------------------ */}
      <section id="tooltip" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
             Success Toast
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
         Success toasts are brief notifications that inform users about the successful completion of an action or process within an application. They typically appear temporarily on the screen, often at the bottom or top corner, and automatically disappear after a few seconds. Success toasts are designed to provide positive feedback to users, enhancing their experience by confirming that their intended action was completed without issues.
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
           <button
    onClick={() =>
      Toast.success("Your order has been placed successfully.", {
        position: "bottom-right",
        duration: 3000,
      })
    }
    className="px-4 py-2 bg-green-600 text-white rounded-lg shadow hover:bg-green-700"
  >
    Show Success Toast
  </button>
        </Box>

        <CodeBlock
          filename="tooltip.tsx"
          language="tsx"
          code={String.raw`
            
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
            

`}
        />
      </section>
    </DocsLayout>
  );
}
