type PanelProps = {
  title: string;
  children?: React.ReactNode;
};

export default function Panel({ title, children }: PanelProps) {
  return (
    <section style={{ marginTop: '1rem', background: '#111c32', border: '1px solid #23344f', borderRadius: '16px', padding: '1rem' }}>
      <h3 style={{ marginTop: 0 }}>{title}</h3>
      {children}
    </section>
  );
}
