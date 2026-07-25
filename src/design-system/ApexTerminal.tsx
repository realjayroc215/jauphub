import { useState } from "react";
import { JROC_THEME } from "./theme";

export function ApexTerminal({ title = "JAUP Terminal", onCommand }) {
  const [lines, setLines] = useState(["Swarm: ONLINE", "Agents: ACTIVE"]);
  const [input, setInput] = useState("");

  const submit = (e) => {
    e.preventDefault();
    if (!input.trim()) return;
    setLines([...lines, "> " + input]);
    onCommand?.(input);
    setInput("");
  };

  return (
    <div style={{
      padding: "16px",
      borderRadius: "12px",
      background: "#050509",
      border: "1px solid #333",
      boxShadow: JROC_THEME.glow.medium,
      fontFamily: "monospace",
      display: "flex",
      flexDirection: "column",
      gap: "10px",
      height: "260px"
    }}>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <span>{title}</span>
        <span style={{ opacity: 0.7 }}>JAUP OS</span>
      </div>

      <div style={{ flex: 1, overflowY: "auto" }}>
        {lines.map((l, i) => <div key={i}>{l}</div>)}
      </div>

      <form onSubmit={submit} style={{ display: "flex", gap: "8px" }}>
        <input
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={{
            flex: 1,
            background: "#0A0A12",
            border: "1px solid #333",
            borderRadius: "6px",
            padding: "6px 8px",
            color: JROC_THEME.colors.text
          }}
        />
        <button style={{
          background: JROC_THEME.colors.primary,
          color: "#fff",
          border: "none",
          borderRadius: "6px",
          padding: "6px 12px",
          cursor: "pointer",
          boxShadow: JROC_THEME.glow.soft
        }}>
          Run
        </button>
      </form>
    </div>
  );
}
