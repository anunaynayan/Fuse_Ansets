"use client";

import { Box, Typography } from "@mui/material";


import DocsLayout from "@/components/documetation/DocsLayout";
import CodeBlock from "@/components/documetation/CodeBlock";
import AppDatePicker from "../forms/components/date-picker";
import { AppTimePicker } from "../forms/components/Time-Picker";
import DateRangePickerApp from "../forms/components/date-range-picker";
import MarkdownEditor from "../forms/components/makrdowneditor";
import { Dropdown } from "../forms/components/dropDown";
import { Toggle } from "../forms/components/toggle";
import { useEffect, useState } from "react";
import { NumberInput } from "../forms/components/numberInput";
import CheckBox from "../forms/components/checkBox";

export default function DrawerDocs() {

  const [isEnabled, setIsEnabled] = useState(false);
  const [number, setNumber] = useState<number | "">("");

const [code, setCode] = useState<string>("");
  
    useEffect(() => {
      fetch("/snippets/numberinput.txt")
        .then((r) => r.text())
        .then(setCode);
    }, []);
  
  return (
    <DocsLayout
     title="Form Component Documentation"
        backLink="/ansassets/form-components/forms"
        backText="Back to Form Components"  
    >
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        form components are essential UI elements that allow users to input,
        upload, and submit data. This documentation covers various form
        components, including Text Field, Password Field, Number Input, Text
        Area, Dropdown, and Rich Text Editor, detailing their implementation and
        usage within applications.
      </Typography>

      {/* ------------------------ DEPENDENCIES ------------------------ */}
      <section id="dependencies" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-800 dark:text-gray-100"
        >
          Dependencies & Technologies
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          These are the necessary dependencies and technologies for the Form
          Components:
        </Typography>

        <Typography
          variant="h6"
          className="font-semibold mb-2 text-gray-800 dark:text-gray-100"
        >
          Required Dependencies:
        </Typography>

        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>@mui/icons-material</li>
          <li>react</li>
          <li>next</li>
        </ul>

      </section>

      {/* ------------------------ date picker SECTION ------------------------ */}
      <section id="datepicker" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Date Picker
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          The DatePicker component allows users to select a date from a calendar
          interface.
        </Typography>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={` npm install  @mui/material @mui/icons-material @mui/x-date-pickers dayjs`}
        />

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <AppDatePicker />
        </Box>

        <CodeBlock
          filename="datepicker.tsx"
          language="tsx"
          code={`
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
            
            
           `}
        />
      </section>

      {/* ------------------------ time picker SECTION ------------------------ */}

      <section id="datepicker" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Time Picker
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Time Picker is a versatile and user-friendly component that allows
          users to select times from a clock interface. It is commonly used in
          forms, booking systems, and scheduling applications to enhance user
          experience and ensure accurate time input.
        </Typography>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install  @mui/material @mui/icons-material @mui/x-date-pickers dayjs`}
        />

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <AppTimePicker />
        </Box>

        <CodeBlock
          filename="timepicker.tsx"
          language="tsx"
          code={`

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
            
            
           `}
        />
      </section>

      {/* ------------------------ date range   picker SECTION ------------------------ */}

      <section id="datepicker" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Date Range Picker
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Date Range Picker is a versatile and user-friendly component that
          allows users to select a date range from a calendar interface. It is
          commonly used in forms, booking systems, and scheduling applications
          to enhance user experience and ensure accurate date input.
        </Typography>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material @mui/icons-material@mui/x-date-pickers dayjs`}
        />

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <DateRangePickerApp />
        </Box>

        <CodeBlock
          filename="timepicker.tsx"
          language="tsx"
          code={`

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
            
            
           `}
        />
      </section>

      {/* ------------------------------DropDown----------------------------- */}

       {/* <section id="datepicker" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          DropDown
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          DropDown is a component that allows users to select an option from a list of predefined options. It is commonly used in forms, menus, and other user interfaces to provide a convenient way for users to choose from a range of options.
        </Typography>

          

<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
       Preview 
        </Typography>
        

        <Box className="mb-4 max-w-sm mx-auto">
          <Dropdown/>
        </Box>

        <CodeBlock
          filename="dropdown.tsx"
          language="tsx"
          code={`

          
          
            
           `}
        />
      </section>    */}


      {/* ------------------------ markdown editor SECTION ------------------------ */}

      <section id="datepicker" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Markdown Editor
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Markdown Editor is a versatile and user-friendly component that allows
          users to write and preview markdown content. It is commonly used in
          forms, blogging platforms, and documentation generators to enhance
          user experience and ensure accurate markdown input.
        </Typography>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install @mui/material @mui/icons-material @uiw/react-md-editor  react-syntax-highlighter `}
        />

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
          <MarkdownEditor />
        </Box>

        <CodeBlock
          filename="timepicker.tsx"
          language="tsx"
          code={`

           "use client";
           
           import React, { useState, useCallback } from "react";
           import MDEditor from "@uiw/react-md-editor";
           import { Light as SyntaxHighlighter } from "react-syntax-highlighter";
           import { atomOneLight, atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
           import { useTheme } from "@mui/material/styles";
           
           export default function MarkdownEditor() {
             const [value, setValue] = useState<string>(""); 
             const { theme } = useTheme(); 
           
             const handleKeyDown = useCallback(
               (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
                 if (e.ctrlKey) {
                   if (e.key === "b") {
                     e.preventDefault();
                     setValue((prev) => prev + "**bold**");
                   } else if (e.key === "i") {
                     e.preventDefault();
                     setValue((prev) => prev + "_italic_");
                   } else if (e.key === "k") {
                     e.preventDefault();
                     setValue((prev) => prev + "[link](url)");
                   }
                 }
               },
               []
             );
           
             return (
               <div className="p-4 w-full">
                 <MDEditor
                   value={value}
                   onChange={setValue}
                   height={500}
                   textareaProps={{
                     onKeyDown: handleKeyDown,
                     placeholder: "Start writing your markdown...",
                   }}
                   previewOptions={{
                     components: {
                       code({ inline, className, children, ...props }) {
                         const match = /language-(\w+)/.exec(className || "");
                         return !inline && match ? (
                           <SyntaxHighlighter
                             style={theme === "dark" ? atomOneDark : atomOneLight}
                             language={match[1]}
                             PreTag="div"
                             {...props}
                           >
                             {String(children).replace(/\n$/, "")}
                           </SyntaxHighlighter>
                         ) : (
                           <code className={className} {...props}>
                             {children}
                           </code>
                         );
                       },
                     },
                   }}
                 />
               </div>
             );
           }
           
            
           `}
        />
      </section>


       {/* ------------------------toggle SECTION ------------------------ */}

   
             <section id="datepicker" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Toggle
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Toggle is a component that allows users to switch between two states,
          such as on and off. It is commonly used in forms, settings, and other
          user interfaces to provide a convenient way for users to make
          selections.
        </Typography>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install  @mui/material @mui/icons-material`}
        />

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
         <Toggle
          checked={isEnabled}
          onChange={setIsEnabled}
          labelOn="Enabled"
          labelOff="Disabled"
          showIcon
          color="secondary"
        />
        </Box>


<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Complete Component Code
  </Typography>




        <CodeBlock
          filename="toggle.tsx"
          language="tsx"
          code={`

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

            
           `}
        />
      </section>


{/* ------------------------Number Input SECTION ------------------------ */}

           <section id="datepicker" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Number Input
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          Number Input is a component that allows users to enter numeric
          values. It is commonly used in forms, settings, and other user
          interfaces to provide a convenient way for users to input numbers.
        </Typography>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install  @mui/material @mui/icons-material`}
        />

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
        <NumberInput label="Enter Number"
      value={number}
      onChange={setNumber}
      min={0}
      max={100}
      step={1}
      className="w-full"
      placeholder="Enter number"/>
        </Box>


<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Complete Component Code
  </Typography>
        <CodeBlock
          filename="numberinput.tsx"
          language="tsx"
          code={code}
        />
      </section>

{/* Check BOx */}


           <section id="datepicker" className="mb-16">
        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          CheckBox 
        </Typography>

        <Typography className="text-gray-600 dark:text-gray-100 mb-4">
          A checkbox is a user interface (UI) control that allows users to select one or more options from a given list. It is commonly used in forms, settings, and preference panels.
        </Typography>

        <Typography
          variant="body1"
          className="mt-4 mb-4 text-gray-600 dark:text-gray-100"
        >
          Install:
        </Typography>

        <CodeBlock
          filename="Install Command"
          language="bash"
          code={`npm install  @mui/material @mui/icons-material`}
        />

        <Typography
          variant="h4"
          className="font-semibold mb-4 text-gray-900 dark:text-gray-100"
        >
          Preview
        </Typography>

        <Box className="mb-4 max-w-sm mx-auto">
        <CheckBox label="Accept Terms and Conditions" />
        </Box>


<Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
        Complete Component Code
  </Typography>
        <CodeBlock
          filename="numberinput.tsx"
          language="tsx"
          code={``}
        />
      </section>





      {/*  */}
    </DocsLayout>
  );
}
