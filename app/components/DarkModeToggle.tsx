"use client";

import { useState, useEffect } from "react";

export default function DarkModeToggle() {
  const [dark, setDark] = useState(false);

  useEffect(() => {
    document.body.style.background = dark ? "#111" : "#f0f0f0";
    document.body.style.color = dark ? "#fff" : "#000";
  }, [dark]);

  return (
    <button
      onClick={() => setDark(!dark)}
      style={{
        padding: "8px 14px",
        borderRadius: 6,
        background: dark ? "#444" : "#ddd",
        border: "none",
        cursor: "pointer",
      }}
    >
      {dark ? "Light Mode" : "Dark Mode"}
    </button>
  );
}
