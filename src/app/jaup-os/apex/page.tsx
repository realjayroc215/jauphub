import { useState } from "react";
import { ApexTerminal } from "@design/ApexTerminal";
import { ApexCard } from "@design/ApexCard";

export default function ApexConsole() {
  const [output, setOutput] = useState("");

  async function handleCommand(cmd: string) {
    const res = await fetch("/api/apex", {
      method: "POST",
      body: JSON.stringify({ cmd })
    }).then(r => r.json());

    setOutput(res.reply);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="Apex AI — Command Center">
        <p style={{ opacity: 0.85 }}>
          Speak directly to the Apex Core AI. It sees the entire OS.
        </p>
      </ApexCard>

      <ApexTerminal title="Apex AI Console" onCommand={handleCommand} />

      <ApexCard title="Apex Response">
        <pre>{output}</pre>
      </ApexCard>
    </div>
  );
}
