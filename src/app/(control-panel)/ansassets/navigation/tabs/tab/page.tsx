




"use client";
import { Box } from "@mui/material";
import CustomTabs from "./tab"; 

export default function TabDemoApp() {
  const tabs = [
    {
      label: "Analytics",
      content: (
        <div className="space-y-4">
          <h3 className="text-lg font-semibold">📊 Analytics Overview</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="bg-green-100 border border-green-300 p-4 rounded-lg">
              Total Sales: ₹84,500
            </div>
            <div className="bg-blue-100 border border-blue-300 p-4 rounded-lg">
              Users: 2,349
            </div>
            <div className="bg-yellow-100 border border-yellow-300 p-4 rounded-lg">
              Page Views: 34,780
            </div>
          </div>
        </div>
      ),
    },
    {
      label: "Users",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-4">👥 Users List</h3>
          <ul className="space-y-2">
            <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">Aman Sharma</li>
            <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">Priya Mehta</li>
            <li className="p-3 bg-gray-100 rounded-lg hover:bg-gray-200">Raj Patel</li>
          </ul>
        </div>
      ),
    },
    {
      label: "Settings",
      content: (
        <div>
          <h3 className="text-lg font-semibold mb-4">⚙️ Account Settings</h3>
          <button className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Update Profile
          </button>
        </div>
      ),
    },
  ];

  return (
    <Box className="min-h-screen bg-gray-100 p-6 flex flex-col gap-10">
      <h1 className="text-3xl font-bold text-gray-800 text-center">
       Tab Demo
      </h1>

      {/* ---------- Horizontal Tabs Demo ---------- */}
      <Box className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Horizontal Tabs</h2>
        <CustomTabs tabs={tabs} orientation="horizontal" lazy scrollable />
      </Box>

      {/* ---------- Vertical Tabs Demo ---------- */}
      <Box className="bg-white shadow-lg rounded-xl p-6">
        <h2 className="text-xl font-semibold mb-4">Vertical Tabs</h2>
        <CustomTabs tabs={tabs} orientation="vertical" lazy scrollable />
      </Box>
    </Box>
  );
}
