import { JROC_THEME } from "@design/theme";

const apps = Array.from({ length: 1000 }, (_, i) => ({
  name: "Module " + (i + 1),
  path: "/jaup-os/app-" + (i + 1)
}));

export function JaupSidebar() {
  return (
    <aside style={{
      height: "calc(100vh - 60px)",
      padding: "20px",
      background: "#050509",
      borderRight: "1px solid #222",
      overflowY: "auto"
    }}>
      <h2 style={{
        fontFamily: JROC_THEME.typography.brand,
        fontSize: "1.1rem",
        marginBottom: "16px",
        textShadow: JROC_THEME.glow.soft
      }}>
        APEX MODULES (1000)
      </h2>

      <nav style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
        {apps.map((app) => (
          <a key={app.path} href={app.path} style={{
            padding: "10px 12px",
            borderRadius: "6px",
            background: "#0A0A12",
            border: "1px solid #222",
            display: "flex",
            justifyContent: "space-between"
          }}>
            <span>{app.name}</span>
            <span style={{ fontSize: "0.7rem", opacity: 0.7 }}>OPEN</span>
          </a>
        ))}
      </nav>
    </aside>
  );
}
