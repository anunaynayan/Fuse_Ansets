"use client";

import React, { useState } from "react";
import { Switch, FormControlLabel } from "@mui/material";
import CheckIcon from "@mui/icons-material/Check";
import CloseIcon from "@mui/icons-material/Close";

interface ToggleProps {
  checked?: boolean; // Controlled
  defaultChecked?: boolean; // Uncontrolled
  onChange?: (checked: boolean) => void;
  labelOn?: string;
  labelOff?: string;
  disabled?: boolean;
  color?: "primary" | "secondary" | "error" | "warning" | "info" | "success";
  size?: "small" | "medium";
  showIcon?: boolean;
}

export function Toggle({
  checked,
  defaultChecked = false,
  onChange,
  labelOn = "On",
  labelOff = "Off",
  disabled = false,
  color = "primary",
  size = "medium",
  showIcon = false,
}: ToggleProps) {
  const [internalChecked, setInternalChecked] = useState(defaultChecked);

  const isControlled = checked !== undefined;
  const currentChecked = isControlled ? checked : internalChecked;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const newChecked = event.target.checked;
    if (!isControlled) setInternalChecked(newChecked);
    onChange?.(newChecked);
  };

  return (
    <FormControlLabel
      control={
        <Switch
          checked={currentChecked}
          onChange={handleChange}
          disabled={disabled}
          color={color}
          size={size}
          className="rounded-full"
        />
      }
      label={
        <div className="flex items-center gap-2">
          {showIcon &&
            (currentChecked ? (
              <CheckIcon className="text-green-500" />
            ) : (
              <CloseIcon className="text-red-500" />
            ))}
          <span className="text-gray-800 dark:text-gray-200">
            {currentChecked ? labelOn : labelOff}
          </span>
        </div>
      }
    />
  );
}
