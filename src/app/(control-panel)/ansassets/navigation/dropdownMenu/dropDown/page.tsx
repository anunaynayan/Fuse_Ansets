"use client";

import React from "react";

import {
  Edit,
  Delete,
  ContentCopy,
  Share,
  Settings,
  Logout,
  Folder,
  FileCopy,
  
} from "@mui/icons-material";

import DropdownMenu from "./dropDown";

export default function App() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <DropdownMenu
        trigger={
          <button className="px-4 py-2 bg-gray-500 text-black rounded-lg shadow">
            Open Menu
          </button>
        }
        items={[
          {
            label: "Edit",
            icon: <Edit fontSize="small" />,
            onClick: () => alert("Edit clicked"),
          },
          {
            label: "Copy",
            icon: <ContentCopy fontSize="small" />,
            onClick: () => alert("Copy clicked"),
          },
          {
            
            divider: true,
          },
          {
            label: "More Actions",
            icon: <Folder fontSize="small" />,
            children: [
              {
                label: "Duplicate",
                icon: <FileCopy fontSize="small" />,
                onClick: () => alert("Duplicate clicked"),
              },
              {
                label: "Share",
                icon: <Share fontSize="small" />,
                onClick: () => alert("Share clicked"),
              },
            ],
          },
          {
            divider: true,
          },
          {
            label: "Settings",
            icon: <Settings fontSize="small" />,
            onClick: () => alert("Settings clicked"),
          },
          {
            label: "Logout",
            icon: <Logout fontSize="small" />,
            onClick: () => alert("Logout clicked"),
            disabled: false,
          },
        ]}
      />
    </div>
  );
}
