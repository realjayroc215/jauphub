import { JROC_THEME } from "./theme";
export function ApexButton({ children, variant = "primary" }) {
  const base = {
    fontFamily: JROC_THEME.typography.brand,
    padding: "10px 18px",
    borderRadius: "8px",
    border: "none",
    cursor: "pointer",
    transition: "0.2s",
    fontSize: "0.95rem"
  };
  const variants = {
    primary: { background: JROC_THEME.colors.primary, color: "#fff", boxShadow: JROC_THEME.glow.medium },
    secondary: { background: JROC_THEME.colors.secondary, color: "#050509", boxShadow: JROC_THEME.glow.soft },
    ghost: { background: "transparent", color: JROC_THEME.colors.text, border: "1px solid #333" }
  };
  return (
    <button style={{ ...base, ...variants[variant] }}>
      {children}
    </button>
  );
}
