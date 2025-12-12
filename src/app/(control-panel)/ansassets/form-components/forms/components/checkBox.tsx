// CheckBox.tsx
import React from "react";
import {
  Checkbox as MuiCheckbox,
  FormControl,
  FormControlLabel,
  FormGroup,
  FormLabel,
  FormHelperText,
  CheckboxProps as MuiCheckboxProps,
} from "@mui/material";

export type SizeVariant = "sm" | "md" | "lg";

export interface CheckBoxProps extends Omit<MuiCheckboxProps, "size"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  error?: boolean;
  variantSize?: SizeVariant;
  className?: string;
  inline?: boolean;

  /** MULTIPLE / GROUP MODE */
  options?: { label: React.ReactNode; value: string | number; disabled?: boolean }[];
  selected?: Array<string | number>;
  defaultSelected?: Array<string | number>;
  onChangeGroup?: (values: Array<string | number>) => void;
}

const sizeMap = {
  sm: { iconFont: "small", tw: "text-sm" },
  md: { iconFont: "medium", tw: "text-base" },
  lg: { iconFont: "large", tw: "text-lg" },
};

const CheckBox: React.FC<CheckBoxProps> = ({
  options,
  label,
  helperText,
  error = false,
  variantSize = "md",
  className = "",
  inline = true,
  checked,
  onChange,
  selected,
  defaultSelected = [],
  onChangeGroup,
  ...rest
}) => {
  const isGroup = Array.isArray(options) && options.length > 0;
  const cfg = sizeMap[variantSize];

  // ----------------------------- MULTIPLE MODE -----------------------------
  if (isGroup) {
    const controlled = Array.isArray(selected);
    const [internal, setInternal] = React.useState<Array<string | number>>(defaultSelected);

    const current = controlled ? selected! : internal;

    const toggle = (val: string | number) => {
      const next = current.includes(val)
        ? current.filter((v) => v !== val)
        : [...current, val];

      if (!controlled) setInternal(next);
      onChangeGroup?.(next);
    };

    return (
      <FormControl component="fieldset" className={`w-full ${className}`} error={error}>
        {label && <FormLabel className="mb-1 text-sm font-semibold">{label}</FormLabel>}

        <FormGroup className={`flex ${inline ? "flex-row flex-wrap gap-4" : "flex-col gap-2"}`}>
          {options.map((opt) => (
            <FormControlLabel
              key={String(opt.value)}
              control={
                <MuiCheckbox
                  size={cfg.iconFont as MuiCheckboxProps["size"]}
                  checked={current.includes(opt.value)}
                  onChange={() => toggle(opt.value)}
                  disabled={opt?.disabled}
                />
              }
              label={<span className={`${cfg.tw}`}>{opt.label}</span>}
              className="gap-2"
            />
          ))}
        </FormGroup>

        {helperText && <FormHelperText className="text-xs">{helperText}</FormHelperText>}
      </FormControl>
    );
  }

  // ----------------------------- SINGLE MODE -----------------------------
  return (
    <FormControl
      component="fieldset"
      className={`w-full ${className}`}
      error={Boolean(error)}
      aria-invalid={error ? "true" : undefined}
    >
      <FormGroup>
        <FormControlLabel
          control={
            <MuiCheckbox
              size={cfg.iconFont as MuiCheckboxProps["size"]}
              checked={checked}
              onChange={onChange}
              {...rest}
            />
          }
          label={<span className={`${cfg.tw}`}>{label}</span>}
          className={`flex ${inline ? "flex-row gap-2 items-center" : "flex-col gap-1 items-start"}`}
        />
      </FormGroup>

      {helperText && <FormHelperText className="text-xs mt-0.5">{helperText}</FormHelperText>}
    </FormControl>
  );
};

export default CheckBox;
