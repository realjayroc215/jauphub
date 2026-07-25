import Card from '@/ui/Card';
import Panel from '@/ui/Panel';
import Button from '@/ui/Button';

export default function Dashboard() {
  return (
    <main>
      <h1>Command Center</h1>
      <p>Monitor systems and coordinate actions.</p>
      <div style={{ display: 'grid', gap: '1rem', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))' }}>
        <Card title="Operations" description="3 active workflows">
          <Button>Open Console</Button>
        </Card>
        <Card title="Signals" description="12 update events">
          <Button variant="secondary">Review</Button>
        </Card>
        <Card title="Health" description="All systems nominal">
          <Button variant="ghost">Inspect</Button>
        </Card>
      </div>
      <Panel title="Live Summary">
        <p>Telemetry, alerts, and routing decisions are synchronized.</p>
      </Panel>
    </main>
  );
}
