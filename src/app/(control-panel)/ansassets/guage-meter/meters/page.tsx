import React from "react";
import SimpleGauge from "./components/GaugeSimple";
import RingGauge from "./components/GaugeRing";
import SemiGauge from "./components/GaugeSemicircle";
import { Container } from "@mui/material";

export default function Page() {
  return (
    <main className="min-h-screen bg-gray-50 py-12">
      <Container maxWidth="lg">
        <h1 className="text-3xl font-semibold mb-6">Gauge Charts Showcase</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <SimpleGauge />
          <RingGauge />
          <SemiGauge />
        </div>
      </Container>
    </main>
  );
}
