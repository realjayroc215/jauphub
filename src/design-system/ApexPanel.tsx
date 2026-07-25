import { JROC_THEME } from "./theme";
export function ApexPanel({ label, value }) {
  return (
    <div style={{
      padding: "14px 16px",
      borderRadius: "10px",
      background: "#050509",
      border: "1px solid #333",
      boxShadow: JROC_THEME.glow.soft,
      display: "flex",
      flexDirection: "column",
      gap: "4px",
      minWidth: "160px"
    }}>
      <span style={{ fontSize: "0.8rem", opacity: 0.7 }}>{label}</span>
      <span style={{
        fontFamily: JROC_THEME.typography.brand,
        fontSize: "1.1rem"
      }}>{value}</span>
    </div>
  );
}
