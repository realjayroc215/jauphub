import { ApexCard } from "@design/ApexCard";
import { ApexGrid } from "@design/ApexGrid";
import { ApexPanel } from "@design/ApexPanel";
import { ApexTerminal } from "@design/ApexTerminal";

export default function CommandCenterMonetization() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="Apex Command Center — Monetization">
        <p style={{ opacity: 0.85 }}>
          Control paid tiers, billing, ads, and marketing from one place.
        </p>
      </ApexCard>

      <ApexGrid columns={3}>
        <ApexPanel label="Active Tiers" value="FREE / PRO / ULTRA / GOD" />
        <ApexPanel label="Billing Provider" value="Stripe (stubbed)" />
        <ApexPanel label="Ads Provider" value="Google AdSense (stubbed)" />
      </ApexGrid>

      <ApexCard title="Admin Notes">
        <ul>
          <li>Super Admin and partners are always GOD tier, free forever.</li>
          <li>Stripe integration goes in /api/billing.</li>
          <li>AdSense config goes in /api/ads and client layout.</li>
          <li>Marketing AI uses /api/marketing.</li>
        </ul>
      </ApexCard>

      <ApexTerminal title="Monetization Command Console" />
    </div>
  );
}
