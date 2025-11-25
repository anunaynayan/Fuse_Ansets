"use client";

import CustomTabs from "./tab";

export default function App() {


 const demoTabs = [
  {
    label: "Overview",
    content: (
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Overview</h2>
        <p className="text-gray-600">
          This tab shows a general summary of the product.
        </p>
      </div>
    ),
  },
  {
    label: "Details",
    content: (
      <div className="space-y-2">
        <h2 className="text-lg font-semibold">Details</h2>
        <p className="text-gray-600">
          This section contains detailed specifications and analysis.
        </p>
      </div>
    ),
  },
  {
    label: "Settings",
    content: (
      <div className="space-y-2">
        <h2 className="text-3xl font-bold">Settings</h2>
        <p className="text-gray-600">
          Configure and manage preferences from here.
        </p>
      </div>
    ),
  },
];


  return (
      <div className="min-h-screen bg-[#e0e5ec] p-8 flex justify-center items-start">

      {/* Main Neumorphic Card */}
      <div className="
        w-full max-w-4xl p-10 rounded-3xl
       
      ">
        
        {/* Heading */}
        <h1 className="text-3xl font-bold text-gray-700 mb-8 text-center">
          Tab Demo
        </h1>

        {/* Horizontal Tabs Block */}
        <div
          className="
            mb-12 p-6 rounded-2xl
            bg-[#e0e5ec]
            shadow-[8px_8px_16px_#c3c8d1,-8px_-8px_16px_#ffffff]
          "
        >
          <h2 className="text-lg font-semibold text-gray-600 mb-4">
            Horizontal Tabs
          </h2>

          <CustomTabs
            tabs={demoTabs}
            orientation="horizontal"
            lazy
            scrollable
            className="rounded-xl p-2 text-xl font-semibold"
          />
        </div>

        {/* Vertical Tabs Block */}
        <div
          className="
            p-6 rounded-2xl
            bg-[#e0e5ec]
            shadow-[8px_8px_16px_#c3c8d1,-8px_-8px_16px_#ffffff]
          "
        >
          <h2 className="text-lg font-semibold text-gray-600 mb-4">
            Vertical Tabs
          </h2>

          <div className="flex">
            <CustomTabs
              tabs={demoTabs}
              orientation="vertical"
              lazy
              className="rounded-xl p-2"
            />
          </div>
        </div>

      </div>
    </div>
  );
}
