// "use client";


// import { Box} from "@mui/material";
// import DatePicker from "./datepicker";


// export default function App() {

//   return (
    
//      <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-10 px-4">
      
//       {/* Grid layout with auto row heights */}
//       <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto auto-rows-auto">
//         {/* Date Picker */}
//         <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col items-start w-full">
//           <h2 className="text-xl font-semibold dark:text-white mb-2">
//             Date Picker
//           </h2>
//          <DatePicker/>
//         </Box>
       
//       </div>
//     </div>
//   );
// }




"use client";

import React, { useState } from "react";
import { Box } from "@mui/material";
import DatePicker from "./datepicker";

/* ---------------------------------------------
   Variant Card
--------------------------------------------- */
function VariantCard({
  title,
  description,
  children,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
}) {
  return (
    <Box className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 flex flex-col gap-3">
      <h2 className="text-lg font-semibold dark:text-white">{title}</h2>
      <p className="text-sm text-gray-600 dark:text-gray-300">{description}</p>
      <div className="pt-2">{children}</div>
    </Box>
  );
}

/* ---------------------------------------------
   Main App
--------------------------------------------- */
export default function App() {
  const today = new Date();

  const next30Days = new Date();
  next30Days.setDate(today.getDate() + 30);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 dark:from-gray-900 dark:to-gray-800 py-12 px-4">

      {/* Header */}
      <header className="max-w-[1400px] mx-auto mb-12">
        <h1 className="text-3xl font-bold dark:text-white">
          Date Picker 
        </h1>
        <p className="mt-3 max-w-3xl text-gray-600 dark:text-gray-300">
          Each Date Picker below demonstrates a different interaction pattern
          and functional behavior based on real-world use cases.
        </p>
      </header>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-[1400px] mx-auto">

        {/* FORM BASED */}
        <VariantCard
          title="Form-Based Date Picker"
          description="Enforces date range with validation and clear support."
        >
          <DatePicker
            label="DOB"
            minDate={new Date(1990, 0, 1)}
            maxDate={today}
            helperText="Date must be in valid range"
            showClear
          />
        </VariantCard>

        {/* COMPACT */}
        <VariantCard
          title="Compact Utility Picker"
          description="Minimal footprint with clear button disabled."
        >
          <DatePicker
            label="Filter Date"
            size="small"
            showClear={false}
          />
        </VariantCard>

        {/* BOOKING / FUTURE ONLY */}
        <VariantCard
          title="Booking Date Picker"
          description="Allows only future dates for booking."
        >
          <DatePicker
            label="Booking Date"
            minDate={today}
            maxDate={next30Days}
          />
        </VariantCard>

        {/* REPORT / MONTH FOCUS */}
        <VariantCard
          title="Report Date Picker"
          description="Optimized for selecting report periods."
        >
          <DatePicker
            label="Report Date"
            format={(d) =>
              d.toLocaleDateString("en-US", {
                month: "long",
                year: "numeric",
              })
            }
          />
        </VariantCard>

        {/* READ ONLY */}
        <VariantCard
          title="Read-only Picker"
          description="Date is fixed and cannot be modified."
        >
          <DatePicker
            label="System Date"
            value={today}
            disabled
          />
        </VariantCard>

        {/* RESTRICTED DAYS (WEEKENDS) */}
        <VariantCard
          title="Weekday-Only Picker"
          description="Disables weekends to enforce working days."
        >
          <DatePicker
            label="Working Day"
            onChange={(date) => {
              if (!date) return;
              const day = date.getDay();
              if (day === 0 || day === 6) {
                alert("Weekends are not allowed");
              }
            }}
          />
        </VariantCard>

      </div>
    </div>
  );
}
