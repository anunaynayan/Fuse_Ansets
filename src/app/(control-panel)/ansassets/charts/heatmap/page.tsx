"use client";

import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import Header from "./components/Header";
import { motion, AnimatePresence } from "framer-motion";

import type { ChannelMetric, CampaignClick } from "./types";

const HeatmapChannelMetric = dynamic(
  () => import("./components/HeatmapChannelMetric"),
  { ssr: false }
);
const HeatmapCampaignDate = dynamic(
  () => import("./components/HeatmapCampaignDate"),
  { ssr: false }
);
const HeatmapCalendar = dynamic(() => import("./components/HeatmapCalendar"), {
  ssr: false,
});

export default function Page() {
  const [active, setActive] = useState<"channel" | "campaign" | "calendar">(
    "channel"
  );
  const [channelData, setChannelData] = useState<ChannelMetric[]>([]);
  const [campaignData, setCampaignData] = useState<CampaignClick[]>([]);

  useEffect(() => {
    // load JSON from public folder
    fetch("/assets/channelMetrics.json")
      .then((r) => r.json())
      .then(setChannelData);
    fetch("/assets/campaignClicks.json")
      .then((r) => r.json())
      .then(setCampaignData);
  }, []);

  return (
    <main className="min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* <Header active={active} onChange={setActive} /> */}

        <div className="mt-6">
          <AnimatePresence mode="wait">
            {active === "channel" && (
              <motion.div
                key="channel"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <HeatmapChannelMetric data={channelData} />
              </motion.div>
            )}

            {active === "campaign" && (
              <motion.div
                key="campaign"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <HeatmapCampaignDate data={campaignData} />
              </motion.div>
            )}

            {active === "calendar" && (
              <motion.div
                key="calendar"
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
              >
                <HeatmapCalendar data={campaignData} />
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </main>
  );
}
