"use client";

import React, { useState } from "react";
import { Box } from "@mui/system";
import AppDatePicker from "./components/date-picker";
import { AppTimePicker } from "./components/Time-Picker";
import DateRangePickerApp from "./components/date-range-picker";
import MarkdownEditor from "./components/makrdowneditor";
import { Toggle } from "./components/toggle";
import { TextField } from "./components/textfield";
import { PasswordField } from "./components/passwordfield";
import { NumberInput } from "./components/numberInput";
import { TextArea } from "./components/textArea";
import { Dropdown } from "./components/dropDown";
// import { RichTextEditor } from "./components/richTextEditor";

export default function App() {
  const [time, setTime] = useState<Date | null>(new Date());
  const [isEnabled, setIsEnabled] = useState(false);
  const [content, setContent] = useState("");
  const [number, setNumber] = useState("");

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-10 dark:text-white">
        Form Components
      </h1>

      {/* Grid layout with auto row heights */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto">
        {/* Date Picker */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Date Picker
          </h2>
          <AppDatePicker />
        </Box>

        {/* Time Picker */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Time Picker
          </h2>
          <AppTimePicker />
        </Box>

        {/* Date Range Picker */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Date Range Picker
          </h2>
          <DateRangePickerApp />
        </Box>

        {/* Markdown Editor */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Markdown Editor
          </h2>
          <MarkdownEditor />
        </Box>

        {/* Toggle */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Toggle Switch
          </h2>
          <Toggle
            checked={isEnabled}
            onChange={setIsEnabled}
            labelOn="Enabled"
            labelOff="Disabled"
            showIcon
            color="secondary"
          />
        </Box>

        {/* Text Field Example */}
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-start w-full max-w-xs">
          <div>
            <h2 className="text-xl font-semibold dark:text-white mb-2">
              Text Field
            </h2>
            <TextField placeholder="Enter text" />
          </div>

          <div className="p-3">
            <h2 className="text-xl font-semibold dark:text-white mb-2">
              Password Field
            </h2>
            <PasswordField placeholder="Enter password" />
          </div>

          <div className="p-3">
            <h2 className="text-xl font-semibold dark:text-white mb-2">
              Number Input
            </h2>
            <NumberInput placeholder="Enter number" />
          </div>

          <div className="p-3">
            <h2 className="text-xl font-semibold dark:text-white mb-2">
              Text Area
            </h2>
            <TextArea placeholder="Enter text" />
          </div>

<div className="p-3">
            <h2 className="text-xl font-semibold dark:text-white mb-2">
              DropDown
            </h2>
           <Dropdown options={[{ value: "1", label: "Option 1" }, { value: "2", label: "Option 2" }]} />
          </div>


        </Box>
      </div>
    </div>
  );
}
