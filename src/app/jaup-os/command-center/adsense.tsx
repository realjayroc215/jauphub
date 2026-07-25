import { ApexCard } from "@design/ApexCard";
import { ApexGrid } from "@design/ApexGrid";
import { ApexPanel } from "@design/ApexPanel";

export default function AdSenseIntegration() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="AdSense Integration">
        <p style={{ opacity: 0.85 }}>
          Configure Google AdSense placements and behavior for Free tier users.
        </p>
      </ApexCard>

      <ApexGrid columns={3}>
        <ApexPanel label="Provider" value="Google AdSense" />
        <ApexPanel label="Placements" value="Banner / Sidebar / Footer" />
        <ApexPanel label="Status" value="READY TO WIRE" />
      </ApexGrid>

      <ApexCard title="Client Integration Notes">
        <ul>
          <li>Load AdSense script in your root layout or specific pages.</li>
          <li>Use /api/ads for server-side config.</li>
          <li>Show ads only for FREE tier users.</li>
        </ul>
      </ApexCard>
    </div>
  );
}
