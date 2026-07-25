import { ApexCard } from "@design/ApexCard";
import { ApexPanel } from "@design/ApexPanel";
import { ApexGrid } from "@design/ApexGrid";
import { ApexTerminal } from "@design/ApexTerminal";

export default function App365() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="Apex Module 365">
        <p style={{ opacity: 0.85 }}>
          Autonomous JAUP OS App #365 — powered by Apex Core AI.
        </p>
      </ApexCard>

      <ApexGrid columns={3}>
        <ApexPanel label="Status" value="ONLINE" />
        <ApexPanel label="Health" value="GOOD" />
        <ApexPanel label="Agent" value="ACTIVE" />
      </ApexGrid>

      <ApexTerminal title="Module 365 Console" />
    </div>
  );
}
