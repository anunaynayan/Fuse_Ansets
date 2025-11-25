"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Sidebar } from "./components/sidebar";
import Appbar from "./components/appbar";
import { Footer } from "./components/footer";


export default function RootLayout({ children }) {
  const [headerData, setHeaderData] = useState(null);
  const [menuData, setMenuData] = useState([]);
  const [footerData, setFooterData] = useState(null);

  useEffect(() => {
    axios.get("/data/appbar.json").then((res) => setHeaderData(res.data));
    axios.get("/data/sidebar.json").then((res) => setMenuData(res.data));
    axios.get("/data/footer.json").then((res) => setFooterData(res.data));
  }, []);

  return (
    <html lang="en">
      <body className="flex h-screen overflow-hidden">

        {/* ---------- LEFT SIDEBAR ---------- */}
        <aside className="w-64 bg-white shadow-xl h-full overflow-y-auto hidden md:block">
          <Sidebar
            menuItems={menuData}
            logo={<h1 className="text-xl font-bold text-red-500 p-4">My App</h1>}
            footer={<p className="text-sm opacity-60 p-4">© 2025 My Company</p>}
          />
        </aside>

        {/* ---------- RIGHT MAIN AREA ---------- */}
        <div className="flex flex-col flex-1 h-full overflow-y-auto">

          {/* ---------- HEADER / APPBAR ---------- */}
          {headerData && <Appbar headerData={headerData} />}

          {/* ---------- MAIN PAGE CONTENT ---------- */}
          <main className="p-6 flex-1">{children}</main>

          {/* ---------- FOOTER ---------- */}
          {footerData && <Footer data={footerData} />}
        </div>
      </body>
    </html>
  );
}
