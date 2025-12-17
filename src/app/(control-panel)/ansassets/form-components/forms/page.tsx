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
import MultiSelect, { Option } from "./components/mulltiselect";
import CheckBox from "./components/checkBox";
import Header from "@/components/Header";

const demoOptions: Option[] = [
  { value: "react", label: "React", group: "Frameworks" },
  { value: "vue", label: "Vue", group: "Frameworks" },
  { value: "angular", label: "Angular", group: "Frameworks" },
  { value: "node", label: "Node.js", group: "Runtime" },
  { value: "deno", label: "Deno", group: "Runtime", disabled: true },
];

export default function App() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [selected, setSelected] = useState<Option[]>([demoOptions[0]]);
  const [agree, setAgree] = useState(false);
  const [skills, setSkills] = useState<Array<string | number>>([]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-6">
      {/* 🔹 FORM HEADER */}
      <Header
        title="Form Components Library"
        description="A complete collection of reusable, responsive and customizable form components built with React, MUI and Tailwind CSS."
      />

      {/* 🔹 FORM GRID */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">
        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Date Picker
          </h2>
          <AppDatePicker />
        </Box>

        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Time Picker
          </h2>
          <AppTimePicker />
        </Box>

        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Date Range Picker
          </h2>
          <DateRangePickerApp />
        </Box>

        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Markdown Editor
          </h2>
          <MarkdownEditor />
        </Box>

        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold dark:text-white mb-2">Inputs</h2>

          <TextField
            label="Text"
            value=""
            onChange={() => {}}
            placeholder="Text"
            error={false}
            helperText=""
            icon={null}
          />
          <div className="mt-3">
            <PasswordField
              label="Text"
              value=""
              onChange={() => {}}
              placeholder="Text"
              error={false}
              helperText=""
              icon={null}
            />
          </div>
          <div className="mt-3">
            <NumberInput
              label="Number"
              value={0}
              onChange={() => {}}
              placeholder="Number"
              error={false}
              helperText=""
              min={0} // required
              max={100} // required
              step={1}
            />
          </div>
          <div className="mt-3">
            <TextArea
              label="Number"
              value={0}
              onChange={() => {}}
              placeholder="Number"
              error={false}
              helperText=""
            />
          </div>
          <div className="mt-3">
            <h2 className="mt-3">Dropdown</h2>
            <Dropdown
              label="Number"
              value={0}
              onChange={() => {}}
              placeholder="Number"
              error={false}
              helperText=""
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
              ]}
            />
          </div>
        </Box>

        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold dark:text-white mb-4">
            Multi Select
          </h2>
          <MultiSelect
            options={demoOptions}
            value={selected}
            onChange={setSelected}
            label="Technologies"
            placeholder="Choose multiple"
            creatable
            clearable
            maxTags={2}
          />
        </Box>

        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold dark:text-white mb-4">
            Checkbox
          </h2>
          <CheckBox
            label="I agree to the Terms & Conditions"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
            error={!agree}
            helperText={!agree ? "You must accept terms" : ""}
          />
        </Box>

        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
          <h2 className="text-xl font-semibold dark:text-white mb-4">
            Multiple Checkboxes
          </h2>
          <CheckBox
            label="Select Skills"
            options={[
              { label: "React", value: "react" },
              { label: "Node", value: "node" },
              { label: "MongoDB", value: "mongo" },
              { label: "Next.js", value: "next" },
            ]}
            selected={skills}
            onChangeGroup={setSkills}
            inline
          />
        </Box>

        <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-sm">
          <h2 className="text-xl font-semibold dark:text-white mb-4">
            Toggle Switch
          </h2>
          <Toggle
            checked={isEnabled}
            onChange={setIsEnabled}
            labelOn="Enabled"
            labelOff="Disabled"
            showIcon
          />
        </Box>
        {/* 
           <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 max-w-sm">
           <h2 className="text-xl font-semibold dark:text-white mb-4">
          RichText Editor
          </h2>
          <RichTextEditor
        
      />
        </Box> */}
      </div>
    </div>
  );
}
