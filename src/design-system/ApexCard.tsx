import { JROC_THEME } from "./theme";
export function ApexCard({ title, children }) {
  return (
    <section style={{
      padding: "18px",
      borderRadius: "12px",
      background: "#0A0A12",
      boxShadow: JROC_THEME.glow.soft,
      border: "1px solid #222",
      marginBottom: "16px"
    }}>
      {title && <h3 style={{
        fontFamily: JROC_THEME.typography.brand,
        fontSize: "1rem",
        marginBottom: "10px"
      }}>{title}</h3>}
      <div>{children}</div>
    </section>
  );
}
