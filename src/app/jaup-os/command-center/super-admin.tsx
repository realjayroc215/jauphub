import { ApexCard } from "@design/ApexCard";
import { ApexGrid } from "@design/ApexGrid";
import { ApexPanel } from "@design/ApexPanel";
import { ApexTerminal } from "@design/ApexTerminal";

export default function SuperAdminPanel() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="Super Admin Control Panel">
        <p style={{ opacity: 0.85 }}>
          Full control over tiers, users, partners, and system behavior.
        </p>
      </ApexCard>

      <ApexGrid columns={3}>
        <ApexPanel label="Role" value="SUPER ADMIN" />
        <ApexPanel label="Access" value="ALL MODULES / ALL TIERS" />
        <ApexPanel label="Perks" value="Free forever, no limits" />
      </ApexGrid>

      <ApexCard title="Admin Actions (Concept)">
        <ul>
          <li>Upgrade / downgrade any user.</li>
          <li>Grant / revoke partner status.</li>
          <li>Toggle ads globally or per tier.</li>
          <li>Trigger marketing campaigns.</li>
          <li>View system health and revenue.</li>
        </ul>
      </ApexCard>

      <ApexTerminal title="Super Admin Command Console" />
    </div>
  );
}
