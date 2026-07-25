import { ApexCard } from "@design/ApexCard";
import { ApexGrid } from "@design/ApexGrid";
import { ApexPanel } from "@design/ApexPanel";
import { ApexTerminal } from "@design/ApexTerminal";

export default function MonetizationCenter() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="Apex Monetization Center">
        <p style={{ opacity: 0.85 }}>
          Manage tiers, billing, ads, and marketing from the Command Center.
        </p>
      </ApexCard>

      <ApexGrid columns={3}>
        <ApexPanel label="Tiers" value="FREE / PRO / ULTRA / GOD" />
        <ApexPanel label="Billing" value="Stripe Ready" />
        <ApexPanel label="Ads" value="AdSense Ready" />
      </ApexGrid>

      <ApexCard title="Admin Notes">
        <ul>
          <li>Super Admin + partners = GOD tier forever.</li>
          <li>Stripe integration goes in /api/billing.</li>
          <li>AdSense config goes in /api/ads.</li>
          <li>Marketing AI uses /api/marketing.</li>
        </ul>
      </ApexCard>

      <ApexTerminal title="Monetization Console" />
    </div>
  );
}
