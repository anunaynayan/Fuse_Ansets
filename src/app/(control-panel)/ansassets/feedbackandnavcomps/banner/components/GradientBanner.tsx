"use client";

import React from "react";

export default function SoftGradientBanner() {
  return (
    <div className="w-full rounded-2xl bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-purple-200 p-6">
      <h3 className="text-base font-semibold text-gray-900">
        Upgrade to Pro
      </h3>
      <p className="text-sm text-gray-600 mt-1">
        Unlock advanced analytics, exports, and team collaboration.
      </p>
    </div>
  );
}
