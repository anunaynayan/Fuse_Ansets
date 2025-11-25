import React from "react";

export function TextField({ 
  label, 
  value, 
  onChange, 
  placeholder, 
  error, 
  helperText,
  icon,
  className = "",
  inputClassName = "",
  ...props
}) {
  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 font-medium">{label}</label>}
      <div className="relative">
        {icon && <div className="absolute left-2 top-1/2 transform -translate-y-1/2">{icon}</div>}
        <input
          type="text"
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={placeholder}
          className={`border rounded-sm p-3 w-full focus:outline-none focus:ring-1 focus:ring-black ${icon ? 'pl-8' : ''} ${inputClassName}`}
          {...props}
        />
      </div>
      {helperText && <span className="text-gray-500 text-sm mt-1">{helperText}</span>}
      {error && <span className="text-red-500 text-sm mt-1">{error}</span>}
    </div>
  );
}
