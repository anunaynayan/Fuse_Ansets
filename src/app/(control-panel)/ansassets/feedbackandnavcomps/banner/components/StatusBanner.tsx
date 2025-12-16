"use client";

import React from "react";

export default function StatusBanner() {
  return (
    <div className="w-full rounded-lg bg-gray-100 border border-gray-200 px-4 py-2 flex items-center gap-2">
      <span className="h-2 w-2 rounded-full bg-green-500" />
      <p className="text-sm text-gray-700">
        All systems operational
      </p>
    </div>
  );
}
