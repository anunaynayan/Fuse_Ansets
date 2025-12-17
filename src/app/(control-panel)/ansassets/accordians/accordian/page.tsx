// "use client";
// import React, { useEffect, useState } from "react";
// import axios from "axios";
// import Accordion from "./accordian";





// export default function  App  ()  {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(true);
 

//   useEffect(() => {
//     axios
//       .get("/data/accordians.json")
//       .then((res) => setData(res.data))
//       .catch(() => setData([]))
//       .finally(() => setLoading(false));
//   }, []);

//   return (

//     <div  className="flex flex-col items-center justify-center">
//       <h1 className="text-3xl font-bold ">Accordion</h1>
//       <Accordion data={data} loading={loading}  />
//     </div>
//   );
// };




"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "./accordian";

export default function App() {
  const [data, setData] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get("/data/accordians.json")
      .then((res) => setData(res.data))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, []);

  return (
   <div className="min-h-screen px-4 py-10 bg-gray-50">
  <h1 className="text-3xl font-bold text-center mb-12">
    Accordion Variants
  </h1>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
    <Section title="Default Accordion">
      <Accordion data={data} loading={loading} />
    </Section>

    <Section title="Bordered Accordion">
      <Accordion data={data} loading={loading} variant="bordered" />
    </Section>

    <Section title="Filled Accordion">
      <Accordion data={data} loading={loading} variant="filled" />
    </Section>

    <Section title="Minimal Accordion">
      <Accordion data={data} loading={loading} variant="minimal" />
    </Section>

    <Section title="FAQ (Multiple Open)">
      <Accordion
        data={data}
        loading={loading}
        variant="faq"
        multiple
      />
    </Section>
  </div>
</div>

  );
}

/* ---------- Reusable Section Wrapper ---------- */

const Section = ({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) => (
  <div className="w-full max-w-2xl">
    <h2 className="text-lg font-semibold mb-4">{title}</h2>
    <div className="bg-white p-4 rounded-md shadow-sm">
      {children}
    </div>
  </div>
);
