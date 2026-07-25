"use client";

import { useEffect, useState } from "react";

export default function SystemStatus() {
  const [status, setStatus] = useState("Checking...");

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setStatus("Online");
    }, 600);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <div style={{ opacity: 0.8 }}>
      System Status: {" "}
      <span style={{ color: status === "Online" ? "#0f0" : "#f00" }}>{status}</span>
    </div>
  );
}
