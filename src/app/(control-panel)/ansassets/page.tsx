"use client";

import React, { useMemo, useState } from "react";
import Link from "next/link";
import { componentsData, ComponentItem } from "./componentData";
import { motion } from "framer-motion";
import {
  TextField,
  MenuItem,
  Container,
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Box,
  Divider,
} from "@mui/material";
import Grid from "@mui/material/GridLegacy";


export default function AnsetsLanding() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState<string>("All");

  const categories = useMemo(() => {
    const cats = Array.from(new Set(componentsData.map((c) => c.category || "Other")));
    return ["All", ...cats];
  }, []);

  const filtered = componentsData.filter((c) => {
    const matchesSearch =
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      (c.description || "").toLowerCase().includes(search.toLowerCase());

    const matchesCategory = category === "All" || (c.category || "Other") === category;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-black text-gray-900 dark:text-gray-100">
      {/* HEADER */}
      <Container maxWidth="lg" className="py-6">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-indigo-600 to-purple-600 flex items-center justify-center text-white font-bold text-lg shadow-lg">
              AS
            </div>
            <div>
              <Typography variant="h5" fontWeight={800}>
                Ansets
              </Typography>
              <Typography variant="body2" color="text.secondary">
                By <b>Anslation</b> — copy, paste, ship.
              </Typography>
            </div>
          </div>

          <nav className="hidden md:flex items-center gap-6">
            <Link className="text-sm hover:underline" href="#components">Components</Link>
            <Link className="text-sm hover:underline" href="#about">About</Link>
            <a className="text-sm px-4 py-2 rounded-md border" href="#">Docs</a>
          </nav>
        </div>
      </Container>

      {/* HERO */}
      <Container maxWidth="lg" className="py-14">
        <Grid container spacing={6} alignItems="flex-start">
          {/* LEFT */}
          <Grid xs={12} md={7}>
            <motion.div
              initial={{ opacity: 0, x: -25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Typography variant="h3" fontWeight={800} gutterBottom>
                Ansets — UI components for developers
              </Typography>

              <Typography variant="body1" color="text.secondary" className="max-w-xl mt-4">
                A collection of production-ready UI components and chart demos built with
                Next.js, Recharts, Tailwind and Material UI. Browse demos, copy code, and ship fast.
              </Typography>

              <Box className="mt-6 flex items-center gap-3">
                <Link href="#components">
                  <Button variant="contained" color="primary" size="large">
                    Browse Components
                  </Button>
                </Link>

                <Button variant="outlined" size="large">
                  Get Started
                </Button>
              </Box>
            </motion.div>
          </Grid>

          {/* RIGHT - FILTERS */}
          <Grid xs={12} md={5}>
            <motion.div
              initial={{ opacity: 0, x: 25 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Card elevation={3} className="p-4">
                <Typography variant="subtitle2" fontWeight={600}>
                  Quick Filter
                </Typography>

                <Box mt={2}>
                  <TextField
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                    placeholder="Search components..."
                    variant="outlined"
                    size="small"
                    fullWidth
                  />
                </Box>

                <Box mt={2}>
                  <TextField
                    select
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                    size="small"
                    fullWidth
                  >
                    {categories.map((c) => (
                      <MenuItem key={c} value={c}>
                        {c}
                      </MenuItem>
                    ))}
                  </TextField>
                </Box>

                <Typography variant="caption" color="text.secondary" className="mt-3 block">
                  Tip: Add metadata in <code>componentsData.ts</code> to auto-list it.
                </Typography>
              </Card>
            </motion.div>
          </Grid>
        </Grid>
      </Container>

      {/* COMPONENT LIST */}
      <Container maxWidth="lg" id="components" className="pb-20">
        <Typography variant="h5" fontWeight={700} className="mb-6">
          Components
        </Typography>

        <Grid container spacing={4}>
          {filtered.map((item: ComponentItem, i: number) => (
            <Grid xs={12} sm={6} md={4} key={item.id}>
              <motion.div
                initial={{ opacity: 0, y: 14 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.04 }}
              >
                <Card elevation={2} className="rounded-xl">
                  <CardContent>
                    <Box className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-indigo-500 to-pink-500 flex items-center justify-center text-white font-semibold text-lg">
                        {item.name.split(" ").slice(0, 2).map((s) => s[0]).join("")}
                      </div>

                      <div>
                        <Typography variant="h6" fontWeight={700}>
                          {item.name}
                        </Typography>

                        <Typography variant="body2" color="text.secondary" className="mt-1">
                          {item.description}
                        </Typography>
                      </div>
                    </Box>
                  </CardContent>

                  <Divider />

                  <CardActions className="flex items-center justify-between px-4 pb-3">
                    <Link href={item.href}>
                      <Button size="small" variant="contained">
                        Open
                      </Button>
                    </Link>

                    <Button
                      size="small"
                      variant="outlined"
                      onClick={() => {
                        navigator.clipboard.writeText(location.origin + item.href);
                        alert("Copied route to clipboard");
                      }}
                    >
                      Copy Route
                    </Button>
                  </CardActions>
                </Card>
              </motion.div>
            </Grid>
          ))}
        </Grid>
      </Container>
    </div>
  );
}
