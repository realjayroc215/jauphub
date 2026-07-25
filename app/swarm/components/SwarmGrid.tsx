"use client";

import { useEffect, useState } from 'react';

export default function SwarmGrid() {
  const [agents, setAgents] = useState<Array<{ id: string; task: string; status: string }>>([]);

  async function load() {
    const res = await fetch('/api/swarm');
    const data = await res.json();
    setAgents(data.agents ?? []);
  }

  async function assign() {
    const task = window.prompt('Task for swarm?');
    if (!task) return;

    await fetch('/api/swarm', {
      method: 'POST',
      body: JSON.stringify({ task }),
    });

    await load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <button onClick={assign}>Assign Task</button>

      <div
        style={{
          marginTop: 20,
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: 20,
        }}
      >
        {agents.map((agent) => (
          <div
            key={agent.id}
            style={{
              padding: 20,
              background: '#222',
              color: '#fff',
              borderRadius: 8,
            }}
          >
            <h3>{agent.id}</h3>
            <p>Task: {agent.task}</p>
            <p>Status: {agent.status}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
