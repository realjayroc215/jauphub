import DarkModeToggle from "./DarkModeToggle";
import SystemStatus from "./SystemStatus";

export default function HeaderBar() {
  return (
    <header
      style={{
        height: 60,
        background: "#111",
        color: "#fff",
        display: "flex",
        alignItems: "center",
        padding: "0 20px",
        borderBottom: "1px solid #222",
        justifyContent: "space-between",
      }}
    >
      <div style={{ fontWeight: "bold" }}>JAUP Unified Platform</div>

      <div style={{ display: "flex", gap: 20, alignItems: "center" }}>
        <SystemStatus />
        <DarkModeToggle />
      </div>
    </header>
  );
}
