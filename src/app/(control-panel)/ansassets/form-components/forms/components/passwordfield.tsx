import React, { useState } from "react";
import { IconButton, InputAdornment } from "@mui/material";
import { Visibility, VisibilityOff } from "@mui/icons-material";

export function PasswordField({ value, onChange, label, icon, className = "", inputClassName = "", ...props }) {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className={`flex flex-col ${className}`}>
      {label && <label className="mb-1 font-medium">{label}</label>}
      <div className="relative">
        {icon && <div className="absolute left-2 top-1/2 transform -translate-y-1/2">{icon}</div>}
        <input
          type={showPassword ? "text" : "password"}
          value={value}
          onChange={(e) => onChange(e.target.value)}
          placeholder={label}
          className={`border rounded-sm p-3 w-full focus:outline-none focus:ring-1 focus:ring-black ${icon ? 'pl-8' : ''} ${inputClassName}`}
          {...props}
        />
        <div className="absolute right-2 top-1/2 transform -translate-y-1/2">
          <IconButton size="small" onClick={() => setShowPassword(!showPassword)}>
            {showPassword ? <VisibilityOff /> : <Visibility />}
          </IconButton>
        </div>
      </div>
    </div>
  );
}
