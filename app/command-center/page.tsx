"use client";

import { useEffect, useState } from 'react';
import Card from '../../ui/Card';

export default function CommandCenter() {
  const [drive, setDrive] = useState<Array<string>>([]);
  const [tasks, setTasks] = useState<Array<{ task: string; status: string }>>([]);
  const [swarm, setSwarm] = useState<Array<{ id: string; task: string; status: string }>>([]);
  const [events, setEvents] = useState<Array<{ event: string; time: string }>>([]);
  const [logs, setLogs] = useState<Array<{ module: string; message: string; time: string }>>([]);

  async function load() {
    const d = await fetch('/api/drive').then((res) => res.json());
    const o = await fetch('/api/office').then((res) => res.json());
    const s = await fetch('/api/swarm').then((res) => res.json());
    const e = await fetch('/api/security').then((res) => res.json());
    const l = await fetch('/api/logs').then((res) => res.json());

    setDrive(d.files ?? []);
    setTasks(o.tasks ?? []);
    setSwarm(s.agents ?? []);
    setEvents(e.events ?? []);
    setLogs(l.logs ?? []);
  }

  useEffect(() => {
    load();
    const interval = window.setInterval(load, 1500);
    return () => window.clearInterval(interval);
  }, []);

  return (
    <div style={{ padding: 40 }}>
      <h1>JAUP Command Center</h1>
      <p>Live unified system overview.</p>

      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: 20,
          marginTop: 30,
        }}
      >
        <Card>
          <h3>📁 Drive</h3>
          <p>{drive.length} files</p>
        </Card>

        <Card>
          <h3>🤖 Office Agent</h3>
          <p>{tasks.length} tasks</p>
        </Card>

        <Card>
          <h3>🕸️ Swarm</h3>
          <p>{swarm.length} agents</p>
        </Card>

        <Card>
          <h3>🛡️ Security</h3>
          <p>{events.length} recent events</p>
        </Card>

        <Card>
          <h3>📡 Logs</h3>
          <p>{logs.length} entries</p>
        </Card>
      </div>
    </div>
  );
}
