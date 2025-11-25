"use client";

import React, { useEffect, useState, useMemo } from "react";
import { Box, TextField, IconButton, Tooltip, Button } from "@mui/material";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import { ChromePicker, ColorResult } from "react-color";

const clamp = (v: number, a = 0, b = 255) => Math.max(a, Math.min(b, Math.round(v)));

function hexToRgb(hex: string) {
  if (!hex) return null;
  const h = hex.replace("#", "").trim();
  if (![3, 6].includes(h.length)) return null;
  const full = h.length === 3 ? h.split("").map((c) => c + c).join("") : h;
  const num = parseInt(full, 16);
  return { r: (num >> 16) & 255, g: (num >> 8) & 255, b: num & 255 };
}

function rgbToHex({ r, g, b }: { r: number; g: number; b: number }) {
  return "#" + [r, g, b].map((n) => clamp(n).toString(16).padStart(2, "0")).join("").toUpperCase();
}

function rgbToHsl({ r, g, b }: { r: number; g: number; b: number }) {
  r /= 255;
  g /= 255;
  b /= 255;
  const max = Math.max(r, g, b),
    min = Math.min(r, g, b);
  let h = 0,
    s = 0;
  const l = (max + min) / 2;
  if (max !== min) {
    const d = max - min;
    s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
    switch (max) {
      case r:
        h = (g - b) / d + (g < b ? 6 : 0);
        break;
      case g:
        h = (b - r) / d + 2;
        break;
      case b:
        h = (r - g) / d + 4;
        break;
    }
    h /= 6;
  }
  return { h: Math.round(h * 360), s: Math.round(s * 100), l: Math.round(l * 100) };
}

function clampAlpha(a: number) {
  return Math.max(0, Math.min(1, a));
}

export interface ColorPickerProps {
  value?: string;
  onChange?: (color: {
    hex: string;
    rgba: string;
    rgb: { r: number; g: number; b: number; a: number };
    hsl: { h: number; s: number; l: number; a: number };
  }) => void;
  palette?: string[];
  showAlpha?: boolean;
  label?: string;
  disableCopy?: boolean;
  disableInput?: boolean;
  fullWidth?: boolean;
  size?: "small" | "medium";
}

const DEFAULT_PALETTE = [
  "#FFFFFF",
  "#000000",
  "#0099FF",
  "#FF6B6B",
  "#FFD93D",
  "#6BCB77",
  "#4D96FF",
  "#9D4EDD",
];

export default function ColorPicker({
  value = "#0099FF",
  onChange,
  palette = DEFAULT_PALETTE,
  showAlpha = true,
  label = "Color",
  disableCopy = false,
  disableInput = false,
  fullWidth = false,
  size = "medium",
}: ColorPickerProps) {
  const initialRgb = useMemo(() => {
    const parsed = hexToRgb(value);
    return parsed ? { ...parsed, a: 1 } : { r: 0, g: 153, b: 255, a: 1 };
  }, []);

  const [rgb, setRgb] = useState(initialRgb);
  const [input, setInput] = useState(value);
  const [copied, setCopied] = useState(false); // New state for copy status

  useEffect(() => {
    const hex = (value || "").toUpperCase();
    const parsed = hexToRgb(hex);
    if (parsed) {
      setRgb({ ...parsed, a: rgb.a });
      setInput(hex);
    }
  }, [value]);

  useEffect(() => {
    const hex = rgbToHex(rgb);
    const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a.toFixed(2)})`;
    const hsl = rgbToHsl(rgb);

    onChange?.({ hex, rgba, rgb, hsl: { ...hsl, a: rgb.a } });
    setInput(rgb.a === 1 ? hex : rgba);
  }, [rgb]);

  const handleColorChange = (c: ColorResult) => {
    const { r, g, b, a } = c.rgb;
    setRgb({ r, g, b, a: a ?? 1 });
  };

  const handleHexInput = (v: string) => {
    setInput(v);
    const hex = v.startsWith("#") ? v : `#${v}`;
    const parsed = hexToRgb(hex);
    if (parsed) setRgb({ ...parsed, a: rgb.a });
  };

  const handleRgb = (key: "r" | "g" | "b" | "a", v: string) => {
    const n = parseFloat(v);
    if (isNaN(n)) return;
    if (key === "a") setRgb((p) => ({ ...p, a: clampAlpha(n) }));
    else setRgb((p) => ({ ...p, [key]: clamp(n) }));
  };

  const handleHsl = (key: "h" | "s" | "l", v: string) => {
    const n = parseFloat(v);
    if (isNaN(n)) return;

    let { h, s, l } = rgbToHsl(rgb);
    if (key === "h") h = n % 360;
    if (key === "s") s = Math.max(0, Math.min(100, n));
    if (key === "l") l = Math.max(0, Math.min(100, n));

    const c = (1 - Math.abs(2 * l / 100 - 1)) * (s / 100);
    const x = c * (1 - Math.abs(((h / 60) % 2) - 1));
    const m = l / 100 - c / 2;
    let r1 = 0, g1 = 0, b1 = 0;
    if (0 <= h && h < 60) [r1, g1, b1] = [c, x, 0];
    else if (60 <= h && h < 120) [r1, g1, b1] = [x, c, 0];
    else if (120 <= h && h < 180) [r1, g1, b1] = [0, c, x];
    else if (180 <= h && h < 240) [r1, g1, b1] = [0, x, c];
    else if (240 <= h && h < 300) [r1, g1, b1] = [x, 0, c];
    else if (300 <= h && h < 360) [r1, g1, b1] = [c, 0, x];

    setRgb({ r: Math.round((r1 + m) * 255), g: Math.round((g1 + m) * 255), b: Math.round((b1 + m) * 255), a: rgb.a });
  };

  const copy = () => {
    if (!disableCopy) {
      navigator.clipboard.writeText(input);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500); // revert after 1.5s
    }
  };

  const hex = rgbToHex(rgb);
  const rgba = `rgba(${rgb.r}, ${rgb.g}, ${rgb.b}, ${rgb.a.toFixed(2)})`;
  const hsl = rgbToHsl(rgb);

  return (
    <div className={`bg-white dark:bg-gray-800 p-4 rounded-xl shadow-md ${fullWidth ? "w-full" : "w-[400px]"}`}>
      <div className="flex justify-between items-center mb-2">
        <span className={`text-sm font-medium ${size === "small" ? "text-gray-700 dark:text-gray-300" : "text-gray-900 dark:text-gray-100"}`}>
          {label}
        </span>
        {!disableCopy && (
          <Tooltip title={copied ? "Copied!" : "Copy"}>
            <IconButton onClick={copy} size="small" aria-label="Copy color value">
              {copied ? <span className="text-xs font-semibold text-green-600">Copied!</span> : <ContentCopyIcon fontSize="small" />}
            </IconButton>
          </Tooltip>
        )}
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <div className="flex-1">
          <ChromePicker
            color={{ r: rgb.r, g: rgb.g, b: rgb.b, a: rgb.a }}
            onChange={handleColorChange}
            disableAlpha={!showAlpha}
            styles={{ default: { picker: { borderRadius: 12, width: "100%" } } }}
          />
        </div>

        <div className="flex flex-col gap-2 w-[160px]">
          <div className="h-12 w-full border border-gray-300 rounded-md" style={{ background: rgba }} />

          {!disableInput && (
            <TextField
              size="small"
              label="HEX / RGBA"
              value={input}
              onChange={(e) => handleHexInput(e.target.value)}
              fullWidth
            />
          )}

          <span className="text-xs font-semibold mt-1">RGB</span>
          <div className="flex gap-1">
            <TextField size="small" label="R" value={rgb.r} onChange={(e) => handleRgb("r", e.target.value)} className="flex-1" />
            <TextField size="small" label="G" value={rgb.g} onChange={(e) => handleRgb("g", e.target.value)} className="flex-1" />
            <TextField size="small" label="B" value={rgb.b} onChange={(e) => handleRgb("b", e.target.value)} className="flex-1" />
          </div>

          {showAlpha && (
            <>
              <span className="text-xs font-semibold mt-1">Alpha</span>
              <TextField
                size="small"
                label="A (0-1)"
                value={rgb.a}
                onChange={(e) => handleRgb("a", e.target.value)}
                className="flex-1"
              />
            </>
          )}

          <span className="text-xs font-semibold mt-1">HSL</span>
          <div className="flex gap-1">
            <TextField size="small" label="H" value={hsl.h} onChange={(e) => handleHsl("h", e.target.value)} className="flex-1" />
            <TextField size="small" label="S" value={hsl.s} onChange={(e) => handleHsl("s", e.target.value)} className="flex-1" />
            <TextField size="small" label="L" value={hsl.l} onChange={(e) => handleHsl("l", e.target.value)} className="flex-1" />
          </div>
        </div>
      </div>

      <div className="mt-3">
        <span className="text-md font-semibold">Palette</span>
        <div className="grid grid-cols-4 gap-1 mt-1">
          {palette.map((p, i) => (
            <Button
              key={i}
              onClick={() => {
                const parsed = hexToRgb(p);
                if (parsed) setRgb({ ...parsed, a: rgb.a });
              }}
              className={`w-full h-10 border ${p.toUpperCase() === hex ? "border-gray-900 dark:border-gray-100" : "border-gray-300"} p-0`}
              style={{ backgroundColor: p }}
              aria-label={`Select color ${p}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
