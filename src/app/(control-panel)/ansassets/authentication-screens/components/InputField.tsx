"use client";
import React from "react";

export default function InputField({
  label,
  icon: Icon,
  error,
  ...props
}: any) {
  return (
    <div className="flex flex-col gap-2 w-full">
      <label className="text-lg font-medium text-gray-700 dark:text-gray-300">
        {label}
      </label>
      <div className="relative">
        {Icon && (
          <Icon className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 dark:text-gray-500" />
        )}
        <input
          {...props}
          className={`w-full rounded-sm border ${
            error ? "border-red-500" : "border-gray-300 dark:border-gray-700"
          } bg-gray-50 dark:bg-gray-800 py-2.5 pl-10 pr-3 text-sm text-gray-900 dark:text-gray-100 shadow-sm  focus:border-b-2 transition-all`}
        />
      </div>
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
