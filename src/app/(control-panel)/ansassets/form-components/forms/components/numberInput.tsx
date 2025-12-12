import React from "react";

export function NumberInput({ value, onChange, min, max, step, label, className="", inputClassName="", ...props }) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 font-medium">{label}</label>}
      <input
        type="number"
        value={value}
        onChange={(e) => onChange(e.target.value)}
        min={min}
        max={max}
        step={step}
        className={`border rounded-sm p-3 w-full focus:outline-none focus:ring-1 focus:ring-black ${inputClassName}`}
        {...props}
      />
    </div>
  );
}
