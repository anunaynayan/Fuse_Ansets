"use client";

import React, { useState } from "react";
import { TextField, Switch, FormControlLabel, useTheme } from "@mui/material";
import { TimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";

interface ReusableTimePickerProps {
  label?: string;
  value?: Date | null;
  onChange?: (value: Date | null) => void;
  error?: boolean;
  helperText?: string;
  disabled?: boolean;
}

export function AppTimePicker({
  label = "Select Time",
  value = null,
  onChange,
  error = false,
  helperText = "",
  disabled = false,
}: ReusableTimePickerProps) {
  const theme = useTheme(); // Access current MUI theme
  const [selectedTime, setSelectedTime] = useState<Date | null>(value);
  const [ampm, setAmpm] = useState(true); // true = 12h, false = 24h

  const handleTimeChange = (newValue: Date | null) => {
    setSelectedTime(newValue);
    if (onChange) onChange(newValue);
  };

  const toggleFormat = () => {
    setAmpm(!ampm);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="flex flex-col gap-2">
        <TimePicker
          ampm={ampm}
          value={selectedTime}
          onChange={handleTimeChange}
          disabled={disabled}
          renderInput={(params) => (
            <TextField
              {...params}
              label={label}
              error={error}
              helperText={helperText}
              className="w-full"
              size="small"
              sx={{
                // Theme-aware styling
                '& .MuiInputBase-root': {
                  color: theme.palette.text.primary,
                  backgroundColor: theme.palette.mode === 'dark' ? '#1f2937' : '#fff',
                  borderRadius: theme.shape.borderRadius,
                },
                '& .MuiFormHelperText-root': {
                  color: theme.palette.error.main,
                },
                '& .MuiOutlinedInput-notchedOutline': {
                  borderColor: theme.palette.divider,
                },
              }}
            />
          )}
        />

        <FormControlLabel
          control={
            <Switch
              checked={!ampm}
              onChange={toggleFormat}
              color="primary"
            />
          }
          label={ampm ? "12h Format" : "24h Format"}
          sx={{
            color: theme.palette.text.primary,
            '.MuiSwitch-track': {
              backgroundColor: theme.palette.mode === 'dark' ? '#4b5563' : '#d1d5db',
            },
          }}
        />
      </div>
    </LocalizationProvider>
  );
}
