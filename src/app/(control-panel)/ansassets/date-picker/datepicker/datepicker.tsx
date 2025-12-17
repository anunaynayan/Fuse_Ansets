// components/DatePicker.tsx
"use client";
import React, { useCallback, useEffect, useMemo, useState } from "react";
import {
  Box,
  Typography,
  TextField,
  Popover,
  IconButton,
  Stack,
  InputAdornment,
  useTheme,
  Button,
} from "@mui/material";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import { motion, AnimatePresence } from "framer-motion";

interface DatePickerProps {
  label?: string;
  size?: "small" | "medium";
  value?: Date | null;
  onChange?: (date: Date | null) => void;
  sx?: object;
  minDate?: Date;
  maxDate?: Date;
  disabled?: boolean;
  error?: boolean;
  helperText?: string;
  format?: (date: Date) => string;
  // optional: showClearButton
  showClear?: boolean;
}

const MotionBox = motion(Box);

const clampDate = (d: Date, min?: Date, max?: Date) => {
  if (!d) return d;
  if (min && d < min) return min;
  if (max && d > max) return max;
  return d;
};

const startOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth(), 1);
const endOfMonth = (d: Date) => new Date(d.getFullYear(), d.getMonth() + 1, 0);

const sameDay = (a?: Date | null, b?: Date | null) =>
  !!a &&
  !!b &&
  a.getFullYear() === b.getFullYear() &&
  a.getMonth() === b.getMonth() &&
  a.getDate() === b.getDate();

const monthsShort = (locale = "default") =>
  Array.from({ length: 12 }).map((_, i) =>
    new Date(2000, i, 1).toLocaleString(locale, { month: "short" })
  );

const yearsRange = (start: number, end: number) => {
  const arr = [];
  for (let y = start; y <= end; y++) arr.push(y);
  return arr;
};

const DatePicker: React.FC<DatePickerProps> = ({
  label = "Select Date",
  size = "small",
  value = null,
  onChange,
  sx = {},
  minDate,
  maxDate,
  disabled = false,
  error = false,
  helperText = "",
  format,
  showClear = true,
}) => {
  const theme = useTheme();

  // External sync
  const [selectedDate, setSelectedDate] = useState<Date | null>(
    value ? new Date(value) : null
  );
  useEffect(() => {
    if (value) setSelectedDate(new Date(value));
    if (value === null) setSelectedDate(null);
  }, [value]);

  // internal UI state
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const open = Boolean(anchorEl);

  // the calendar month currently displayed (first day of month)
  const [displayedMonth, setDisplayedMonth] = useState<Date>(
    value ? startOfMonth(new Date(value)) : startOfMonth(new Date())
  );

  // view mode: "days" | "months" | "years" | "decade"
  const [view, setView] = useState<"days" | "months" | "years" | "decade">(
    "days"
  );

  // animation direction when switching months
  const [direction, setDirection] = useState<number>(0);

  // Decade navigator state: base decade start (e.g., 2020 for 2020-2029)
  const baseDecade = useMemo(
    () => Math.floor(displayedMonth.getFullYear() / 10) * 10,
    [displayedMonth]
  );

  // helpers
  const isDisabledDay = useCallback(
    (date: Date) => {
      if (minDate && date < startOfDay(minDate)) return true;
      if (maxDate && date > endOfDay(maxDate)) return true;
      return false;
    },
    [minDate, maxDate]
  );

  function startOfDay(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 0, 0, 0, 0);
  }
  function endOfDay(d: Date) {
    return new Date(d.getFullYear(), d.getMonth(), d.getDate(), 23, 59, 59, 999);
  }

  // open/close
  const handleOpen = (e: React.MouseEvent<HTMLElement>) => {
    if (disabled) return;
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setView("days");
  };

  // month navigation
  const handleMonthChange = (offset: number) => {
    setDirection(offset);
    setDisplayedMonth((prev) => {
      const next = new Date(prev.getFullYear(), prev.getMonth() + offset, 1);
      return next;
    });
    setView("days");
  };

  const handleSelectDay = (d: number) => {
    const newDate = new Date(
      displayedMonth.getFullYear(),
      displayedMonth.getMonth(),
      d
    );
    if (isDisabledDay(newDate)) return;
    setSelectedDate(newDate);
    onChange?.(newDate);
    handleClose();
  };

  const handleSelectMonth = (monthIndex: number) => {
    const newDisplayed = new Date(
      displayedMonth.getFullYear(),
      monthIndex,
      1
    );
    setDisplayedMonth(newDisplayed);
    setView("days");
  };

  const handleSelectYear = (year: number) => {
    const newDisplayed = new Date(year, displayedMonth.getMonth(), 1);
    setDisplayedMonth(newDisplayed);
    setView("months");
  };

  const handleSelectDecadeYear = (year: number) => {
    // selecting a year from decade view goes to months
    handleSelectYear(year);
  };

  const handleClear = (e?: React.MouseEvent) => {
    e?.stopPropagation();
    setSelectedDate(null);
    onChange?.(null);
    handleClose();
  };

  // build calendar days for current displayedMonth
  const calendarMatrix = useMemo(() => {
    const year = displayedMonth.getFullYear();
    const month = displayedMonth.getMonth();
    const firstDayIndex = new Date(year, month, 1).getDay(); // 0..6
    const totalDays = new Date(year, month + 1, 0).getDate();

    const cells: Array<null | number> = [];

    // prefix nulls for first week
    for (let i = 0; i < firstDayIndex; i++) cells.push(null);
    // days
    for (let d = 1; d <= totalDays; d++) cells.push(d);
    // optional suffix to complete grid (not strictly necessary)
    return cells;
  }, [displayedMonth]);

  // title strings
  const displayedMonthTitle = displayedMonth.toLocaleString("default", {
    month: "long",
  });
  const displayedYear = displayedMonth.getFullYear();

  // formatting display value
  const displayValue = selectedDate
    ? format
      ? format(selectedDate)
      : selectedDate.toLocaleDateString()
    : "";

  // keyboard helpers (optional, minimal)
  // (not implemented full keyboard nav — can be extended)

  // YEARS grid for "years" view (e.g., 12 years centered around displayed)
  const yearsGrid = useMemo(() => {
    const center = displayedMonth.getFullYear();
    const start = center - 6;
    return yearsRange(start, start + 11);
  }, [displayedMonth]);

  // DECADE grid (10 years in decade)
  const decadeYears = useMemo(() => yearsRange(baseDecade, baseDecade + 9), [
    baseDecade,
  ]);

  // compute whether a specific month / year / day should be disabled (uses min/max)
  const isMonthDisabled = (year: number, monthIndex: number) => {
    const first = startOfMonth(new Date(year, monthIndex, 1));
    const last = endOfMonth(first);
    if (minDate && last < startOfDay(minDate)) return true;
    if (maxDate && first > endOfDay(maxDate)) return true;
    return false;
  };

  const isYearDisabled = (year: number) => {
    const first = startOfMonth(new Date(year, 0, 1));
    const last = endOfMonth(new Date(year, 11, 31));
    if (minDate && last < startOfDay(minDate)) return true;
    if (maxDate && first > endOfDay(maxDate)) return true;
    return false;
  };

  const onNavigateDecade = (offsetDecades: number) => {
    const newBase = baseDecade + offsetDecades * 10;
    // set displayedMonth to new base decade start
    setDisplayedMonth(new Date(newBase, displayedMonth.getMonth(), 1));
    setView("decade");
  };

  return (
    <Box sx={{ width: "100%", ...sx }}>
      {label && (
        <Typography
          variant="body2"
          sx={{ mb: 0.5, color: "text.secondary", fontWeight: 500 }}
        >
          {label}
        </Typography>
      )}

      <TextField
        fullWidth
        value={displayValue}
        size={size}
        disabled={disabled}
        error={error}
        placeholder={label || "Select date"} 
        helperText={helperText}
        onClick={(e) => e.stopPropagation()}   
  InputProps={{
    readOnly: true,

    inputProps: {
      onClick: (e: any) => e.stopPropagation(),
    },
          endAdornment: (
            <InputAdornment position="end">
              {showClear && selectedDate && !disabled && (
                <IconButton
                  aria-label="Clear date"
                  size="small"
                  onClick={handleClear}
                >
                  {/* small clear (use X) */}
                  <Typography variant="caption">✕</Typography>
                </IconButton>
              )}
              <IconButton
                aria-label="Open calendar"
                onClick={handleOpen}
                size="small"
                disabled={disabled}
              >
                <CalendarMonthIcon color="action" />
              </IconButton>
            </InputAdornment>
          ),
        }}
        sx={{
          "& .MuiInputBase-root": { borderRadius: "6px" ,padding: "5px",  },
          cursor: disabled ? "not-allowed" : "pointer",
        }}
        className="p-[5px] rounded-md"
      />

      <Popover
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "left" }}
        transformOrigin={{ vertical: "top", horizontal: "left" }}
        PaperProps={{
          sx: {
            borderRadius: 3,
            width: { xs: 300, sm: 360, md: 420 },
            maxWidth: "95vw",
            p: 2,
          },
        }}
      >
        <Box sx={{ outline: "none" }}>
          {/* Header with nav and mode switch */}
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              mb: 1,
            }}
          >
            <IconButton
              onClick={() => handleMonthChange(-1)}
              size="small"
              aria-label="Previous month"
            >
              <ChevronLeftIcon />
            </IconButton>

            <Box sx={{ textAlign: "center", cursor: "default" }}>
              <Typography
                variant="subtitle2"
                fontWeight="bold"
                onClick={() => setView("years")}
                sx={{ userSelect: "none", lineHeight: 1 }}
              >
                {displayedYear}
              </Typography>

              <Button
                onClick={() => setView("months")}
                size="small"
                endIcon={<KeyboardArrowDownIcon />}
                sx={{
                  textTransform: "none",
                  minWidth: 0,
                  p: 0,
                  mt: 0.25,
                }}
              >
                <Typography variant="subtitle2">
                  {displayedMonthTitle}
                </Typography>
              </Button>
            </Box>

            <IconButton
              onClick={() => handleMonthChange(1)}
              size="small"
              aria-label="Next month"
            >
              <ChevronRightIcon />
            </IconButton>
          </Box>

          <AnimatePresence mode="wait">
            {view === "days" && (
              <MotionBox
                key={`days-${displayedMonth.toISOString()}`}
                initial={{ opacity: 0, x: direction > 0 ? 40 : -40 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: direction > 0 ? -40 : 40 }}
                transition={{ duration: 0.22 }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(7, 1fr)",
                  gap: 1,
                }}
                role="grid"
                aria-roledescription="calendar"
              >
                {/* Weekday labels */}
                <Box sx={{ gridColumn: "1 / -1", mb: 0.5 }}>
                  <Stack direction="row" justifyContent="space-between">
                    {["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"].map((d) => (
                      <Typography
                        key={d}
                        variant="caption"
                        sx={{ width: 36, textAlign: "center", fontWeight: 600 }}
                      >
                        {d}
                      </Typography>
                    ))}
                  </Stack>
                </Box>

                {/* day cells (with leading empty cells) */}
                {calendarMatrix.map((cell, idx) =>
                  cell === null ? (
                    <Box
                      key={`empty-${idx}`}
                      sx={{ width: 36, height: 36, visibility: "hidden" }}
                    />
                  ) : (
                    (() => {
                      const dayNum = cell;
                      const date = new Date(
                        displayedMonth.getFullYear(),
                        displayedMonth.getMonth(),
                        dayNum
                      );
                      const disabledDay = isDisabledDay(date);
                      const isSelected = sameDay(selectedDate, date);
                      const today = sameDay(new Date(), date);

                      return (
                        <MotionBox
                          key={`day-${dayNum}`}
                          role="gridcell"
                          aria-selected={isSelected}
                          whileHover={!disabledDay ? { scale: 1.05 } : {}}
                          whileTap={!disabledDay ? { scale: 0.95 } : {}}
                          onClick={() => handleSelectDay(dayNum)}
                          sx={{
                            width: 36,
                            height: 36,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                            borderRadius: "50%",
                            cursor: disabledDay ? "not-allowed" : "pointer",
                            opacity: disabledDay ? 0.4 : 1,
                            bgcolor: isSelected ? "primary.main" : "transparent",
                            color: isSelected ? "primary.contrastText" : "text.primary",
                            border: today && !isSelected ? `2px solid ${theme.palette.success.main}33` : "none",
                            "&:hover": !disabledDay
                              ? { bgcolor: isSelected ? "primary.dark" : "action.hover" }
                              : {},
                          }}
                        >
                          <Typography variant="body2">{dayNum}</Typography>
                        </MotionBox>
                      );
                    })()
                  )
                )}
              </MotionBox>
            )}

            {/* MONTHS VIEW */}
            {view === "months" && (
              <MotionBox
                key={`months-${displayedMonth.getFullYear()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.18 }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(3, 1fr)",
                  gap: 1,
                  maxHeight: 260,
                }}
              >
                {monthsShort().map((m, idx) => {
                  const disabledMonth = isMonthDisabled(displayedMonth.getFullYear(), idx);
                  const isSelectedMonth =
                    selectedDate &&
                    selectedDate.getFullYear() === displayedMonth.getFullYear() &&
                    selectedDate.getMonth() === idx;
                  return (
                    <MotionBox
                      key={m}
                      onClick={() => !disabledMonth && handleSelectMonth(idx)}
                      whileHover={!disabledMonth ? { scale: 1.03 } : {}}
                      sx={{
                        p: 1.25,
                        borderRadius: 2,
                        cursor: disabledMonth ? "not-allowed" : "pointer",
                        textAlign: "center",
                        bgcolor: isSelectedMonth ? "primary.main" : "transparent",
                        color: isSelectedMonth ? "primary.contrastText" : "text.primary",
                        "&:hover": !disabledMonth ? { bgcolor: isSelectedMonth ? "primary.dark" : "action.hover" } : {},
                      }}
                    >
                      <Typography variant="body2">{m}</Typography>
                    </MotionBox>
                  );
                })}
              </MotionBox>
            )}

            {/* YEARS VIEW (grid around current year) */}
            {view === "years" && (
              <MotionBox
                key={`years-${displayedMonth.getFullYear()}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.18 }}
                sx={{
                  display: "grid",
                  gridTemplateColumns: "repeat(4, 1fr)",
                  gap: 1,
                  maxHeight: 300,
                  overflowY: "auto",
                }}
              >
                {yearsGrid.map((y) => {
                  const disabledY = isYearDisabled(y);
                  const isSelectedY = displayedMonth.getFullYear() === y;
                  return (
                    <MotionBox
                      key={`year-${y}`}
                      onClick={() => !disabledY && handleSelectYear(y)}
                      whileHover={!disabledY ? { scale: 1.03 } : {}}
                      sx={{
                        p: 1,
                        borderRadius: 2,
                        cursor: disabledY ? "not-allowed" : "pointer",
                        textAlign: "center",
                        bgcolor: isSelectedY ? "primary.main" : "transparent",
                        color: isSelectedY ? "primary.contrastText" : "text.primary",
                        "&:hover": !disabledY ? { bgcolor: isSelectedY ? "primary.dark" : "action.hover" } : {},
                      }}
                    >
                      <Typography variant="body2">{y}</Typography>
                    </MotionBox>
                  );
                })}
                {/* Decade navigator trigger */}
                <Box sx={{ gridColumn: "1 / -1", mt: 0.5, display: "flex", justifyContent: "center", gap: 1 }}>
                  <Button size="small" onClick={() => onNavigateDecade(-1)}>- Decade</Button>
                  <Button size="small" onClick={() => setView("decade")}>Open Decade</Button>
                  <Button size="small" onClick={() => onNavigateDecade(1)}>+ Decade</Button>
                </Box>
              </MotionBox>
            )}

            {/* DECADE VIEW (your chosen UX) */}
            {view === "decade" && (
              <MotionBox
                key={`decade-${baseDecade}`}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.18 }}
                sx={{
                  maxHeight: 320,
                  overflowY: "auto",
                }}
              >
                {/* decade header with prev/next */}
                <Box sx={{ display: "flex", justifyContent: "space-between", alignItems: "center", mb: 1 }}>
                  <Button size="small" onClick={() => onNavigateDecade(-1)}>-</Button>
                  <Typography variant="subtitle2" fontWeight="600">
                    {baseDecade} — {baseDecade + 9}
                  </Typography>
                  <Button size="small" onClick={() => onNavigateDecade(1)}>+</Button>
                </Box>

                <Box sx={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 1 }}>
                  {decadeYears.map((y) => {
                    const disabledY = isYearDisabled(y);
                    const isCurrentDisplayed = displayedMonth.getFullYear() === y;
                    return (
                      <MotionBox
                        key={`decade-year-${y}`}
                        onClick={() => !disabledY && handleSelectDecadeYear(y)}
                        whileHover={!disabledY ? { scale: 1.03 } : {}}
                        sx={{
                          p: 1,
                          borderRadius: 2,
                          cursor: disabledY ? "not-allowed" : "pointer",
                          textAlign: "center",
                          bgcolor: isCurrentDisplayed ? "primary.main" : "transparent",
                          color: isCurrentDisplayed ? "primary.contrastText" : "text.primary",
                          "&:hover": !disabledY ? { bgcolor: isCurrentDisplayed ? "primary.dark" : "action.hover" } : {},
                        }}
                      >
                        <Typography variant="body2">{y}</Typography>
                      </MotionBox>
                    );
                  })}
                </Box>
              </MotionBox>
            )}
          </AnimatePresence>
        </Box>
      </Popover>
    </Box>
  );
};

export default DatePicker;
