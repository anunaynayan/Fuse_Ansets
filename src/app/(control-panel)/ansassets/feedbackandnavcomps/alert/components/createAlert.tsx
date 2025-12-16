"use client";

import React from "react";
import BaseAlert from "./BaseAlert";

type AlertFactoryOptions = {
  defaultMessage: React.ReactNode;
  defaultClassName: string;
  defaultIcon?: React.ReactNode;
};

type AlertProps = {
  message?: React.ReactNode;
  showIcon?: boolean;
  dismissible?: boolean;
  onClose?: () => void;
  className?: string;
};

export function createAlert(options: AlertFactoryOptions) {
  return function Alert({
    message = options.defaultMessage,
    showIcon = true,
    dismissible = false,
    onClose,
    className = "",
  }: AlertProps) {
    return (
      <BaseAlert
        message={message}
        icon={options.defaultIcon}
        showIcon={showIcon}
        dismissible={dismissible}
        onClose={onClose}
        className={`${options.defaultClassName} ${className}`}
      />
    );
  };
}
