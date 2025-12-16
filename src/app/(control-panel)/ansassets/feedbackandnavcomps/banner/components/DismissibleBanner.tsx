"use client";

import React, { useState } from "react";

export default function DismissibleBanner() {
  const [visible, setVisible] = useState(true);

  if (!visible) return null;

  return (
    <div className="w-full rounded-xl bg-sky-50 border border-sky-200 p-4 flex items-start justify-between gap-4">
      <p className="text-sm text-sky-900">
        🎉 We’ve refreshed our UI for better accessibility.
      </p>

      <button
        onClick={() => setVisible(false)}
        className="text-sky-700 text-sm font-medium"
      >
        Dismiss
      </button>
    </div>
  );
}
