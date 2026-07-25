import { useState } from "react";
import { ApexCard } from "@design/ApexCard";
import { ApexGrid } from "@design/ApexGrid";
import { ApexPanel } from "@design/ApexPanel";
import { ApexTerminal } from "@design/ApexTerminal";

export default function MarketingTemplates() {
  const [output, setOutput] = useState("");

  async function handleCommand(cmd: string) {
    const res = await fetch("/api/marketing", {
      method: "POST",
      body: JSON.stringify({ type: "ad", prompt: cmd })
    }).then(r => r.json());
    setOutput(res.output);
  }

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="Apex Marketing AI Templates">
        <p style={{ opacity: 0.85 }}>
          Generate ads, emails, and SEO content using Apex Marketing AI.
        </p>
      </ApexCard>

      <ApexGrid columns={3}>
        <ApexPanel label="Supported Types" value="ads / emails / seo" />
        <ApexPanel label="Backend" value="/api/marketing" />
        <ApexPanel label="Status" value="STUBBED (READY FOR LLM)" />
      </ApexGrid>

      <ApexTerminal title="Marketing Template Console" onCommand={handleCommand} />

      <ApexCard title="Generated Output">
        <pre>{output}</pre>
      </ApexCard>
    </div>
  );
}
