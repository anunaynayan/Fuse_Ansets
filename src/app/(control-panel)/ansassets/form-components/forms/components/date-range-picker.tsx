"use client";

import React, { useState } from "react";
import { Box, TextField } from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs, { Dayjs } from "dayjs";

interface QuickRange {
  label: string;
  range: [Dayjs, Dayjs];
}

interface CustomDateRangePickerProps {
  label?: string;
  value?: [Dayjs | null, Dayjs | null];
  onChange?: (newValue: [Dayjs | null, Dayjs | null]) => void;
  presets?: QuickRange[];
}

export default function DateRangePickerApp({
  label = "Select Date Range",
  value,
  onChange,
  presets = [],
}: CustomDateRangePickerProps) {
  const [startDate, setStartDate] = useState<Dayjs | null>(value?.[0] || null);
  const [endDate, setEndDate] = useState<Dayjs | null>(value?.[1] || null);

  const defaultPresets: QuickRange[] = [
    { label: "Last 7 Days", range: [dayjs().subtract(6, "day"), dayjs()] },
    { label: "This Month", range: [dayjs().startOf("month"), dayjs().endOf("month")] },
    { label: "Last Month", range: [dayjs().subtract(1, "month").startOf("month"), dayjs().subtract(1, "month").endOf("month")] },
  ];

  const allPresets = presets.length > 0 ? presets : defaultPresets;

  const handlePresetSelect = (preset: QuickRange) => {
    setStartDate(preset.range[0]);
    setEndDate(preset.range[1]);
    onChange?.(preset.range);
  };

  const handleStartChange = (date: Dayjs | null) => {
    if (endDate && date && date.isAfter(endDate)) return; // validation
    setStartDate(date);
    onChange?.([date, endDate]);
  };

  const handleEndChange = (date: Dayjs | null) => {
    if (startDate && date && date.isBefore(startDate)) return; // validation
    setEndDate(date);
    onChange?.([startDate, date]);
  };

  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <Box className="w-full max-w-md mx-auto">
        <label className="block mb-1 text-gray-700 dark:text-gray-200 font-medium">{label}</label>

        {/* Presets */}
        <Box className="flex gap-2 mb-2 flex-wrap">
          {allPresets.map((preset) => (
            <button
              key={preset.label}
              type="button"
              onClick={() => handlePresetSelect(preset)}
              className="px-3 py-1 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 rounded hover:bg-gray-300 dark:hover:bg-gray-600 transition"
            >
              {preset.label}
            </button>
          ))}
        </Box>

        {/* DatePickers */}
        <Box className="flex gap-2">
          <DatePicker
            label="Start"
            value={startDate}
            onChange={handleStartChange}
            renderInput={(params) => <TextField {...params} className="flex-1" />}
          />
          <DatePicker
            label="End"
            value={endDate}
            onChange={handleEndChange}
            renderInput={(params) => <TextField {...params} className="flex-1" />}
          />
        </Box>
      </Box>
    </LocalizationProvider>
  );
}
