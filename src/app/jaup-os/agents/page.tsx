import { ApexCard } from "@design/ApexCard";
import { ApexPanel } from "@design/ApexPanel";
import { ApexGrid } from "@design/ApexGrid";
import { ApexTerminal } from "@design/ApexTerminal";

export default function Page() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="JAUP Agents">
        <p style={{ opacity: 0.85 }}>
          Welcome to the JAUP Agents module of JAUP OS.
        </p>
      </ApexCard>

      <ApexGrid columns={3}>
        <ApexPanel label="Status" value="ONLINE" />
        <ApexPanel label="Health" value="GOOD" />
        <ApexPanel label="Mode" value="ACTIVE" />
      </ApexGrid>

      <ApexTerminal title="JAUP Agents Console" />
    </div>
  );
}
