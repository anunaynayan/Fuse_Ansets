"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Portal from "./Portal";

export type Position =
  | "top-left"
  | "top-right"
  | "top-center"
  | "bottom-left"
  | "bottom-right"
  | "bottom-center";

export type BaseSnackbarProps = {
  message: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  duration?: number;
  onClose?: () => void;
  position?: Position;
  showClose?: boolean;
  progress?: boolean;
  visible?: boolean;
};

function cn(...c: any[]) {
  return c.filter(Boolean).join(" ");
}

const POS_CLASSES: Record<Position, string> = {
  "top-left": "top-8 left-8",
  "top-right": "top-8 right-8",
  "top-center": "top-8 left-1/2 -translate-x-1/2",
  "bottom-left": "bottom-8 left-8",
  "bottom-right": "bottom-8 right-8",
  "bottom-center": "bottom-8 left-1/2 -translate-x-1/2",
};

export default function BaseSnackbar({
  message,
  icon,
  className = "",
  duration = 3000,
  onClose,
  position = "top-right",
  showClose = true,
  progress = false,
  visible = false,
}: BaseSnackbarProps) {
  const [show, setShow] = useState(visible);

  useEffect(() => {
    setShow(visible);
  }, [visible]);

  useEffect(() => {
    if (!show || !duration || duration <= 0) return;
    const t = setTimeout(() => {
      setShow(false);
      onClose?.();
    }, duration);
    return () => clearTimeout(t);
  }, [show, duration, onClose]);

  const anim = {
    initial: { opacity: 0, y: -12, scale: 0.98 },
    animate: { opacity: 1, y: 0, scale: 1 },
    exit: { opacity: 0, y: -12, scale: 0.98, transition: { duration: 0.18 } },
  };

  return (
    <Portal>
      <AnimatePresence>
        {show && (
          <motion.div
            {...anim}
            className={cn(
              "fixed z-[9999] pointer-events-auto max-w-sm w-full",
              POS_CLASSES[position]
            )}
          >
            <div
              className={cn(
                "flex items-start gap-3 p-4 rounded-2xl shadow-2xl backdrop-blur-sm border border-white/8",
                className
              )}
              role="status"
              aria-live="polite"
            >
              {icon && <div className="mt-0.5 ml-0">{icon}</div>}

              <div className="flex-1 min-w-0">
                <div className="text-sm font-medium leading-snug text-white">{message}</div>
                {progress && (
                  <div className="mt-3 h-2 w-full bg-white/10 rounded overflow-hidden">
                    <div
                      className="h-full bg-white/40 animate-progress"
                      style={{ width: "100%" }}
                    />
                  </div>
                )}
              </div>

              {showClose && (
                <button
                  onClick={() => {
                    setShow(false);
                    onClose?.();
                  }}
                  className="ml-2 p-1 rounded hover:bg-white/6 transition"
                >
                  <svg
                    width="14"
                    height="14"
                    viewBox="0 0 16 16"
                    fill="none"
                  >
                    <path
                      d="M4.64645 4.64645L11.3536 11.3536"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                    <path
                      d="M11.3536 4.64645L4.64645 11.3536"
                      stroke="currentColor"
                      strokeWidth="1.2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </button>
              )}
            </div>

            <style jsx>{`
              @keyframes progress {
                from {
                  transform: translateX(-100%);
                }
                to {
                  transform: translateX(0%);
                }
              }
              .animate-progress {
                animation: progress ${duration}ms linear forwards;
              }
            `}</style>
          </motion.div>
        )}
      </AnimatePresence>
    </Portal>
  );
}
