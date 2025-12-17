import React from "react";

export function NumberInput({
  value,
  onChange,
  min,
  max,
  step,
  label,
  className = "",
  inputClassName = "",
  ...props
}) {
  return (
    <div className={`flex flex-col gap-1 ${className}`}>
      {label && (
        <label className="text-sm font-medium text-gray-700">
          {label}
        </label>
      )}

      <input
        type="number"
        value={value}
        min={min}
        max={max}
        step={step}
        onChange={(e) => onChange(Number(e.target.value))}
        className={`
          w-full rounded border border-gray-300
          px-3 py-2 text-sm
          outline-none
          focus:border-black focus:ring-1 focus:ring-black
          ${inputClassName}
        `}
        {...props}
      />
    </div>
  );
}
