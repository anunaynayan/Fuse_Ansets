"use client";

import React, { useState, useRef, useEffect, KeyboardEvent } from "react";
import {
  Box,
  TextField,
  InputAdornment,
  Paper,
  List,
  ListItem,
  ListItemButton,
  ListItemText,
  CircularProgress,
  Typography,
} from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";

type SearchBarProps<T> = {
  value?: string;
  onChange?: (value: string) => void;
  apiUrl?: string;
  debounceMs?: number;
  itemLabel?: (item: T) => string;
  itemKey?: (item: T) => string | number;
  onSelect?: (item: T) => void;
  fetcher?: (query: string) => Promise<T[]>;
  sx?: object;
};

export function SearchBar<T>({
  value = "",
  onChange,
  apiUrl,
  debounceMs = 400,
  itemLabel = (item: any) => item.name,
  itemKey = (item: any) => item.id ?? item.name,
  onSelect,
  fetcher,
  sx = {},
}: SearchBarProps<T>) {
  const [input, setInput] = useState(value);
  const [results, setResults] = useState<T[]>([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [highlightIndex, setHighlightIndex] = useState(-1);

  const timerRef = useRef<number | null>(null);

  const search = async (query: string) => {
    if (!query) {
      setResults([]);
      setLoading(false);
      setError(null);
      return;
    }

    setLoading(true);
    setError(null);

    try {
      let data: T[] = [];

      if (fetcher) {
        data = await fetcher(query);
      } else if (apiUrl) {
        const res = await fetch(apiUrl);
        const json = await res.json();
        data = json.filter((item: any) =>
          itemLabel(item).toLowerCase().includes(query.toLowerCase())
        );
      }

      setResults(data);
    } catch (err: any) {
      setError(err.message || "Error fetching data");
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = e.target.value;
    setInput(val);
    onChange?.(val);

    if (timerRef.current) clearTimeout(timerRef.current);

    timerRef.current = window.setTimeout(() => {
      search(val);
      timerRef.current = null;
    }, debounceMs);
  };

  const handleSelect = (item: T) => {
    setInput(itemLabel(item));
    onChange?.(itemLabel(item));
    setResults([]);
    onSelect?.(item);
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if (!results.length) return;

    if (e.key === "ArrowDown") {
      setHighlightIndex((prev) => Math.min(prev + 1, results.length - 1));
    } else if (e.key === "ArrowUp") {
      setHighlightIndex((prev) => Math.max(prev - 1, 0));
    } else if (e.key === "Enter" && highlightIndex >= 0) {
      handleSelect(results[highlightIndex]);
      setHighlightIndex(-1);
    } else if (e.key === "Escape") {
      setResults([]);
      setHighlightIndex(-1);
    }
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  return (
    <Box sx={{ width: "100%", maxWidth: 400, position: "relative", ...sx }}>
      <TextField
        fullWidth
        variant="outlined"
        placeholder="Search..."
        value={input}
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <SearchIcon />
            </InputAdornment>
          ),
        }}
        autoComplete="off"
      />

      {loading && (
        <Box sx={{ position: "absolute", top: "100%", mt: 1, p: 1 }}>
          <CircularProgress size={20} />
        </Box>
      )}

      {error && (
        <Typography
          color="error"
          sx={{ position: "absolute", top: "100%", mt: 1, p: 1 }}
        >
          {error}
        </Typography>
      )}

      {!loading && results.length > 0 && (
        <Paper
          elevation={3}
          sx={{
            position: "absolute",
            width: "100%",
            zIndex: 10,
            mt: 1,
            maxHeight: 250,
            overflowY: "auto",
          }}
        >
          <List>
            {results.map((item, i) => (
              <ListItem
                key={itemKey(item)}
                disablePadding
                selected={highlightIndex === i}
              >
                <ListItemButton onClick={() => handleSelect(item)}>
                  <ListItemText primary={itemLabel(item)} />
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Paper>
      )}
    </Box>
  );
}
