"use client";

import React from "react";

export default function ActionBanner() {
  return (
    <div className="w-full rounded-2xl bg-gray-900 text-white p-6 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
      <div>
        <h3 className="text-base font-semibold">
          Invite your team
        </h3>
        <p className="text-sm text-gray-300">
          Collaborate faster by adding your teammates.
        </p>
      </div>

      <button className="px-4 py-2 rounded-lg bg-white text-gray-900 text-sm font-medium">
        Invite Now
      </button>
    </div>
  );
}
