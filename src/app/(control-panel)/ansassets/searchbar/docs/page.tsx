"use client";

import { Box, Typography } from "@mui/material";
import CodeBlock from "./codeblock";
import DocsLayout from "./docslayout";
import { SearchBar } from "../search/search";

// -------------------- FULL CODE STRING --------------------
const searchBarCode = `
// "use client";

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
`;

export default function SearchBarDocs() {
  return (
    <DocsLayout>
      {/* ---------------------------------- INTRO ---------------------------------- */}
      <Typography className="text-gray-700 dark:text-gray-100 mb-10 leading-relaxed">
        <b>SearchBar</b> is a highly reusable, debounced, and type-safe React component
        that allows users to search and select items from a list.  
        It supports async fetching, keyboard navigation, customizable rendering,
        and flexible styling for modern applications.
      </Typography>

      {/* ---------------------------------- DEPENDENCIES ---------------------------------- */}
      <section id="dependencies" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-800 dark:text-gray-100">
          Dependencies & Technologies
        </Typography>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-100 space-y-2">
          <li>@mui/material</li>
          <li>@mui/icons-material</li>
          <li>react</li>
          
        </ul>



        <CodeBlock 
        
            filename="Install Command"
            language="bash"
            code={`npm install @mui/material @mui/icons-material`}
        
        
        
        />


      </section>

      {/* ---------------------------------- PREVIEW ---------------------------------- */}
      <section id="preview" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Preview
        </Typography>
        <Box className="mb-6 max-w-md mx-auto border rounded-xl overflow-hidden shadow-lg p-4">
          <SearchBar />
        </Box>
      </section>

      {/* ---------------------------------- USAGE ---------------------------------- */}
      <section id="usage" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Usage Example
        </Typography>
        <CodeBlock
          filename="app/page.tsx"
          language="tsx"
          code={` import { SearchBar } from "@/components/search/SearchBar";

  export default function Page() {
   return (
    <div className="p-8">
      <SearchBar
        apiUrl="https://jsonplaceholder.typicode.com/users"
        debounceMs={300}
      />
    </div>
  );
}
  
`}
        />
      </section>

      {/* ---------------------------------- FULL CODE ---------------------------------- */}
      <section id="full-code" className="mb-16">
        <Typography variant="h4" className="font-semibold mb-4 text-gray-900 dark:text-gray-100">
          Complete Component Code
        </Typography>
        <CodeBlock filename="SearchBar.tsx" language="tsx" code={searchBarCode} />
      </section>
    </DocsLayout>
  );
}
