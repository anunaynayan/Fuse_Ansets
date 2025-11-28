"use client";
import React, { useEffect, useState } from "react";
import axios from "axios";
import Accordion from "./accordian";





export default function  App  ()  {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
 

  useEffect(() => {
    axios
      .get("/data/accordians.json")
      .then((res) => setData(res.data))
      .catch(() => setData([]))
      .finally(() => setLoading(false));
  }, []);

  return (

    <div  className="flex flex-col items-center justify-center">
      <h1 className="text-3xl font-bold ">Accordion</h1>
      <Accordion data={data} loading={loading}  />
    </div>
  );
};


