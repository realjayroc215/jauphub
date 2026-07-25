export function ApexGrid({ children, columns = 3 }) {
  return (
    <div style={{
      display: "grid",
      gap: "18px",
      gridTemplateColumns: `repeat(${columns}, minmax(0, 1fr))`
    }}>
      {children}
    </div>
  );
}
