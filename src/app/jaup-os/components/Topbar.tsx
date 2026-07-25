import { JROC_THEME } from "@design/theme";

export function JaupTopbar() {
  return (
    <header style={{
      height: "60px",
      display: "flex",
      alignItems: "center",
      justifyContent: "space-between",
      padding: "0 20px",
      borderBottom: "1px solid #222",
      boxShadow: JROC_THEME.glow.soft,
      background: "#0A0A12"
    }}>
      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
        <img src={JROC_THEME.logo} alt="J-ROC" height={40}
          style={{ filter: "drop-shadow(0 0 15px #6A00FF)" }} />
        <span style={{
          fontFamily: JROC_THEME.typography.brand,
          fontSize: "1.2rem",
          textShadow: JROC_THEME.glow.medium
        }}>
          JAUP OS
        </span>
      </div>

      <div style={{ display: "flex", gap: "12px", opacity: 0.85 }}>
        <span>Swarm: ONLINE</span>
        <span>Agents: ACTIVE</span>
        <span>Drive: SYNCED</span>
      </div>
    </header>
  );
}
