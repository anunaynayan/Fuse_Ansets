"use client";

import React from "react";
import FloatingToolbarEditor from "./floatingToolbar";


export default function FloatingDemoApp() {
  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-start justify-center p-8">
      <div className="w-full max-w-3xl">
        <h1 className="text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100">
          Floating Toolbar Demo
        </h1>
        <p className="mb-4 text-gray-700 dark:text-gray-300">
          Select text in the editor below to see the floating toolbar.
        </p>

        {/* Floating Toolbar Editor Component */}
        <FloatingToolbarEditor />
      </div>
    </div>
  );
}
