"use client";

import React from "react";

export default function BorderedBanner() {
  return (
    <div className="w-full rounded-xl border-l-4 border-amber-500 bg-amber-50 p-4">
      <h4 className="text-sm font-semibold text-amber-900 mb-1">
        Scheduled Maintenance
      </h4>
      <p className="text-sm text-amber-800">
        The system will be read-only on Sunday from 2 AM – 4 AM.
      </p>
    </div>
  );
}
