import React from "react";

export function Dropdown({ label, options, value, onChange, className="", selectClassName="", ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 font-medium">{label}</label>}
      <select
        value={value}
        onChange={(e) => onChange(e.target.value)}
        className={`border rounded-md p-3 w-full focus:outline-none focus:ring-1 focus:ring-black ${selectClassName}`}
        {...props}
      >
        {options.map((opt) => (
          <option key={opt.value} value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </div>
  );
}
