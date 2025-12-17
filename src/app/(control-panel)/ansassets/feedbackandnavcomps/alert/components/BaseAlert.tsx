"use client";

import React from "react";

export type AlertVariant =
  | "success"
  | "error"
  | "warning"
  | "info"
  | "neutral";

export type BaseAlertProps = {
  message: React.ReactNode;
  icon?: React.ReactNode;
  className?: string;
  showIcon?: boolean;
  dismissible?: boolean;
  onClose?: () => void;
};

function cn(...c: any[]) {
  return c.filter(Boolean).join(" ");
}

export default function BaseAlert({
  message,
  icon,
  className = "",
  showIcon = true,
  dismissible = false,
  onClose,
}: BaseAlertProps) {
  return (
    <div
      role="alert"
      className={cn(
        "w-full flex items-start gap-3 p-4 rounded-xl border",
        className
      )}
    >
      {showIcon && icon && <div className="mt-0.5">{icon}</div>}

      <div className="flex-1 text-sm font-medium leading-snug">
        {message}
      </div>

      {dismissible && (
        <button
          onClick={onClose}
          className="ml-2 p-1 rounded hover:bg-black/5 dark:hover:bg-white/10"
        >
          ✕
        </button>
      )}
    </div>
  );
}
