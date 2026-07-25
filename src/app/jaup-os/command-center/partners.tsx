import { ApexCard } from "@design/ApexCard";
import { ApexGrid } from "@design/ApexGrid";
import { ApexPanel } from "@design/ApexPanel";

const partners = [
  { email: "partner1@apex.local", tier: "GOD", perks: "Free forever" },
  { email: "partner2@apex.local", tier: "GOD", perks: "Free forever" }
];

export default function PartnerManagement() {
  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
      <ApexCard title="Partner Management">
        <p style={{ opacity: 0.85 }}>
          View and manage partners with permanent God tier access.
        </p>
      </ApexCard>

      <ApexGrid columns={3}>
        <ApexPanel label="Total Partners" value={String(partners.length)} />
        <ApexPanel label="Default Tier" value="GOD" />
        <ApexPanel label="Perks" value="Free forever, no ads" />
      </ApexGrid>

      <ApexCard title="Partner List">
        <table style={{ width: "100%", fontSize: "0.9rem" }}>
          <thead>
            <tr>
              <th>Email</th>
              <th>Tier</th>
              <th>Perks</th>
            </tr>
          </thead>
          <tbody>
            {partners.map((p) => (
              <tr key={p.email}>
                <td>{p.email}</td>
                <td>{p.tier}</td>
                <td>{p.perks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </ApexCard>
    </div>
  );
}
