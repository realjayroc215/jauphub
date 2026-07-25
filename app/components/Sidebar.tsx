"use client";

import { usePathname } from "next/navigation";
import { useState } from "react";

const links = [
  { href: "/command-center", label: "Command Center", icon: "🧭" },
  { href: "/drive", label: "Drive", icon: "📁" },
  { href: "/office-agent", label: "Office Agent", icon: "🤖" },
  { href: "/swarm", label: "Swarm", icon: "🕸️" },
  { href: "/security", label: "Security", icon: "🛡️" },
];

export default function Sidebar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(true);

  return (
    <aside
      style={{
        width: open ? 240 : 80,
        background: "#0a0a0a",
        color: "#fff",
        padding: "20px 16px",
        display: "flex",
        flexDirection: "column",
        gap: 12,
        borderRight: "1px solid #222",
        transition: "width 0.25s ease",
      }}
    >
      <button
        onClick={() => setOpen(!open)}
        style={{
          background: "#222",
          color: "#fff",
          border: "none",
          padding: "10px",
          borderRadius: 6,
          marginBottom: 20,
          cursor: "pointer",
        }}
      >
        {open ? "Collapse" : "Expand"}
      </button>

      {links.map((link) => {
        const active = pathname.startsWith(link.href);

        return (
          <a
            key={link.href}
            href={link.href}
            style={{
              padding: "10px 12px",
              borderRadius: 6,
              background: active ? "#0070f3" : "transparent",
              color: active ? "#fff" : "#ccc",
              fontWeight: active ? "bold" : "normal",
              textDecoration: "none",
              display: "flex",
              alignItems: "center",
              gap: 10,
              whiteSpace: "nowrap",
              overflow: "hidden",
            }}
          >
            <span>{link.icon}</span>
            {open && link.label}
          </a>
        );
      })}
    </aside>
  );
}
