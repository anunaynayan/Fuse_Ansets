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


// import { RichTextEditor } from "./components/richTextEditor";







const demoOptions: Option[] = [
  { value: "react", label: "React", group: "Frameworks" },
  { value: "vue", label: "Vue", group: "Frameworks" },
  { value: "angular", label: "Angular", group: "Frameworks" },
  { value: "node", label: "Node.js", group: "Runtime" },
  { value: "deno", label: "Deno", group: "Runtime", disabled: true },
];











export default function App() {
  const [time, setTime] = useState<Date | null>(new Date());
  const [isEnabled, setIsEnabled] = useState(false);
  const [content, setContent] = useState("");
  const [number, setNumber] = useState("");
  const [selected, setSelected] = useState<Option[]>([demoOptions[0]]);
  const [agree, setAgree] = React.useState(false);
   const [skills, setSkills] = React.useState<Array<string | number>>([""]);

// const handleChange = ({ html, markdown }) => {
//     console.log("HTML:", html);
//     console.log("Markdown:", markdown);
//   };




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

   <div className="p-4  w-full border-1 border-gray-300">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            MultiSelect
          </h2>
<MultiSelect
options={demoOptions}
        value={selected}
        onChange={(s) => setSelected(s)}
        label="Technologies"
        placeholder="Choose multiple"
        creatable={true}
        clearable={true}
        maxTags={2}

/>


   </div>

 <div className="p-4  w-full border-1 border-gray-300">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
           Check Box
          </h2>
           <CheckBox
          label="I agree to the Terms and Conditions"
          checked={agree}
          onChange={(e) => setAgree(e.target.checked)}
          error={!agree}
          helperText={!agree ? "You must accept terms to continue" : ""}
          variantSize="md"
        />
        <div className="text-sm mt-2">
          <strong>Status:</strong> {agree ? "Accepted" : "Not Accepted"}
        </div>

   </div>



   <div className="p-4  w-full  ] border-gray-300">
      <h2 className="text-xl font-semibold dark:text-white mb-2">
          Multiple Check Box
          </h2>

 <CheckBox
          label="Select Your Skills"
          options={[
            { label: "React", value: "react" },
            { label: "Node", value: "node" },
            { label: "MongoDB", value: "mongo" },
            { label: "Next.js", value: "next" },
          ]}
          selected={skills}
          onChangeGroup={(next) => setSkills(next)}
          inline={true}
          variantSize="md"
          helperText="You can select multiple skills"
        />

        <div className="text-sm mt-2">
          <strong>Selected Skills:</strong>{" "}
          {skills.length ? skills.join(", ") : "None selected"}
        </div>




   </div>




          
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
            <Dropdown
              options={[
                { value: "1", label: "Option 1" },
                { value: "2", label: "Option 2" },
              ]}
            />
          </div>
        </Box>

{/* Rich Text Editor */}


 {/* <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-4 flex flex-col items-start w-full">
          <h2 className="text-xl font-semibold dark:text-white mb-2">
            Rich Text Editor
          </h2>
          <RichTextEditor
        initialHtml="<h2>Welcome</h2><p>Edit me…</p>"
        mode="html"
        themeMode="light" // or "dark"
        onChange={handleChange}
      />
        </Box> */}







      </div>
    </div>
  );
}
