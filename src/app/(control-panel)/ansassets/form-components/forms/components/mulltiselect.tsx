import React, { useMemo } from "react";
import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Chip from "@mui/material/Chip";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Checkbox from "@mui/material/Checkbox";
import Popper from "@mui/material/Popper";
import ClearIcon from "@mui/icons-material/Clear";
import CheckBoxOutlineBlankIcon from "@mui/icons-material/CheckBoxOutlineBlank";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import { SxProps } from "@mui/system";

export type Option = {
  value: string;
  label: string;
  group?: string;
  disabled?: boolean;
  
  [k: string]: any;
};

export type MultiSelectProps = {
  id?: string;
  options: Option[];
  value?: Option[]; 
  defaultValue?: Option[]; 
  onChange?: (selected: Option[]) => void;
  placeholder?: string;
  label?: string;
  disabled?: boolean;
  creatable?: boolean; 
  clearable?: boolean;
  maxTags?: number | "auto"; 
  renderOption?: (option: Option, selected: boolean) => React.ReactNode;
  optionToString?: (o: Option) => string;
  fullWidth?: boolean;
  size?: "small" | "medium";
  sx?: SxProps;
  className?: string; 
};

const CheckBoxIconEmpty = <CheckBoxOutlineBlankIcon fontSize="small" />;
const CheckBoxIconChecked = <CheckBoxIcon fontSize="small" />;


export default function MultiSelect({
  id = "multi-select",
  options,
  value,
  defaultValue = [],
  onChange,
  placeholder = "Select...",
  label,
  disabled = false,
  creatable = false,
  clearable = true,
  maxTags = 3,
  renderOption,
  optionToString = (o) => o?.label ?? o?.value ?? "",
  fullWidth = true,
  size = "small",
  sx,
  className = "",
}: MultiSelectProps) {
  
  const grouped = useMemo(() => {
    
    const hasGroup = options.some((o) => !!o.group);
    return { hasGroup };
  }, [options]);

  const isOptionEqualToValue = (opt: Option, val: Option) =>
    (opt?.value ?? opt?.label) === (val?.value ?? val?.label);

  const handleChange = (_: any, selected: Option[]) => {
    onChange?.(selected ?? []);
  };

 
  const defaultRenderOption = (opt: Option, selected: boolean) => (
    <Box className="flex items-center gap-2">
      <Checkbox
        edge="start"
        checked={selected}
        tabIndex={-1}
        disableRipple
        icon={CheckBoxIconEmpty}
        checkedIcon={CheckBoxIconChecked}
        size="small"
      />
      <Box className="flex flex-col">
        <Typography component="span" className="text-sm">
          {opt.label}
        </Typography>
        {opt?.group ? (
          <Typography component="small" className="text-xs text-gray-400">
            {opt.group}
          </Typography>
        ) : null}
      </Box>
    </Box>
  );

  
  const freeSolo = creatable;

  return (
    <div
      id={`${id}-wrapper`}
      className={`multi-select-root ${className} ${fullWidth ? "w-full" : ""}`}
      style={{ width: fullWidth ? "100%" : undefined }}
    >
      <Autocomplete
        multiple
        disableCloseOnSelect
        options={options}
        value={value}
        defaultValue={defaultValue}
        onChange={handleChange}
        freeSolo={freeSolo}
        disableClearable={!clearable}
        isOptionEqualToValue={isOptionEqualToValue}
        getOptionLabel={(opt) => optionToString(opt as Option)}
        groupBy={grouped.hasGroup ? (opt: Option) => opt.group ?? "" : undefined}
        renderOption={(props, opt, { selected }) => {
          
          const rendered = renderOption
            ? renderOption(opt as Option, selected)
            : defaultRenderOption(opt as Option, selected);
          return (
            <li {...props} key={opt.value ?? opt.label}>
              {rendered}
            </li>
          );
        }}
        renderTags={(tagValue: Option[], getTagProps) =>
          tagValue.map((option: Option, index: number) => {
            const { onDelete, ...tagProps } = getTagProps({ index });
            return (
              <Chip
                {...tagProps}
                key={option.value ?? option.label}
                label={option.label}
                size={size === "small" ? "small" : "medium"}
                onDelete={option.disabled ? undefined : onDelete}
                className="max-w-full truncate"
                clickable={false}
              />
            );
          })
        }
        renderInput={(params) => (
          <TextField
            {...params}
            label={label}
            placeholder={placeholder}
            size={size}
            disabled={disabled}
            variant="outlined"
            InputProps={{
              ...params.InputProps,
              endAdornment: (
                <div className="flex items-center gap-2">
                  {params.InputProps.endAdornment}
                </div>
              ),
            }}
            sx={{
              
              "& .MuiOutlinedInput-root": {
                paddingRight: 0,
              },
              ...((sx as any) ?? {}),
            }}
            className="bg-white dark:bg-slate-800"
          />
        )}
        PopperComponent={(popperProps) => (
          
          <Popper
            {...(popperProps as any)}
            placement="bottom-start"
            style={{ width: popperProps.anchorEl ? popperProps.anchorEl.clientWidth : undefined }}
            className="z-50"
          />
        )}
        size={size}
        disablePortal={false}
      />
      <style jsx>{`
        
        .multi-select-root .MuiAutocomplete-listbox {
          max-height: 280px;
          overflow: auto;
        }
        @media (max-width: 640px) {
         
          .multi-select-root .MuiPopper-root {
            width: 100% !important;
            left: 0 !important;
            right: 0 !important;
            margin: 0 auto;
          }
          .multi-select-root .MuiAutocomplete-listbox {
            max-height: 50vh;
          }
        }
      `}</style>
    </div>
  );
}
