import React from "react";

export function TextArea({ value, onChange, rows = 4, label, className="", inputClassName="", ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 font-medium">{label}</label>}
      <textarea
        value={value}
        onChange={(e) => onChange(e.target.value)}
        rows={rows}
        className={`border rounded-md p-3 w-full focus:outline-none focus:ring-1 focus:ring-black ${inputClassName}`}
        {...props}
      />
    </div>
  );
}
