"use client";

import { useEffect, useState } from "react";
import axios from "axios";
import CustomTooltip from "./tooltip";


interface UserCard {
  id: number;
  name: string;
  role: string;
  location: string;
  experience: string;
  skills: string[];
}

export default function App() {
  const [users, setUsers] = useState<UserCard[]>([]);
  const [loading, setLoading] = useState(true);

  // Fetch JSON data
  useEffect(() => {
    axios
      .get("/data/tooltip.json")
      .then((res) => {
        setUsers(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error loading JSON:", err);
        setLoading(false);
      });
  }, []);

  if (loading)
    return (
      <div className="flex h-screen items-center justify-center text-xl">
        Loading users...
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-900 p-10">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-900 dark:text-white">
        Team Members 
      </h1>

      {/* Grid Layout */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">

        {users.map((user) => (
          <CustomTooltip
            key={user.id}
            position="top"
            trigger="hover"
            title={
              <div className="text-sm">
                <strong className="text-gray-800">{user.name}</strong>
                <br />
                {user.role}
                <br />
                {user.location}
                <br />
                Experience: {user.experience}
                <br />
                <strong>Skills:</strong>
                <ul className="list-disc ml-4">
                  {user.skills.map((skill, i) => (
                    <li key={i}>{skill}</li>
                  ))}
                </ul>
              </div>
            }
          >
            {/* Card UI */}
            <div className="p-6 bg-white dark:bg-gray-800 rounded-xl shadow hover:shadow-lg cursor-pointer transition">
              <h2 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
                {user.name}
              </h2>
              <p className="text-gray-600 dark:text-gray-300">{user.role}</p>
            </div>
          </CustomTooltip>
        ))}

      </div>
    </div>
  );
}
