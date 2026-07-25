import { ApexCard } from "@design/ApexCard";
import { ApexGrid } from "@design/ApexGrid";
import { ApexPanel } from "@design/ApexPanel";
import { ApexTerminal } from "@design/ApexTerminal";

export default function BillingDashboard() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="Apex Billing Dashboard">
        <p style={{ opacity: 0.85 }}>
          Overview of tiers, subscriptions, and revenue (wired to Stripe in production).
        </p>
      </ApexCard>

      <ApexGrid columns={3}>
        <ApexPanel label="Active Subscriptions" value="—" />
        <ApexPanel label="Monthly Recurring Revenue" value="—" />
        <ApexPanel label="Failed Payments" value="—" />
      </ApexGrid>

      <ApexTerminal title="Billing Command Console" />
    </div>
  );
}
