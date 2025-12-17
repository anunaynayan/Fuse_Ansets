"use client";   

import React from 'react';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import {  TextFieldProps } from '@mui/material';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import  { Dayjs } from 'dayjs';

interface AppDatePickerProps extends Omit<TextFieldProps, 'onChange' | 'value'> {
  label: string;
  value: Dayjs | null;
  onChange: (date: Dayjs | null) => void;
  error?: boolean;
  helperText?: string;
  minDate?: Dayjs;
  maxDate?: Dayjs;
}
const AppDatePicker: React.FC<AppDatePickerProps> = ({
  label,
  value,
  onChange,
  error = false,
  helperText,
  minDate,
  maxDate,
  ...rest
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label={label}
        value={value}
        onChange={onChange}
        format="DD/MM/YYYY"
        minDate={minDate}
        maxDate={maxDate}
        slotProps={{
          textField: {
            error,
            helperText,
            fullWidth: true,
          },
        }}
      />
    </LocalizationProvider>
  );
};

export default AppDatePicker;
