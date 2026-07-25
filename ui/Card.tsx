export default function Card({ children }: { children: React.ReactNode }) {
  return (
    <div style={{
      padding: 20,
      borderRadius: 12,
      background: '#ffffff',
      marginBottom: 20,
      color: '#111',
      border: '1px solid #e5e7eb',
      boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
    }}>
      {children}
    </div>
  );
}
