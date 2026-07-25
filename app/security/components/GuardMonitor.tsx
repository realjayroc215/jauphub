"use client";

import { useEffect, useState } from 'react';

export default function GuardMonitor() {
  const [events, setEvents] = useState<Array<{ time: string; event: string }>>([]);

  async function load() {
    const res = await fetch('/api/security');
    const data = await res.json();
    setEvents(data.events ?? []);
  }

  async function logEvent() {
    const event = window.prompt('Security event?');
    if (!event) return;

    await fetch('/api/security', {
      method: 'POST',
      body: JSON.stringify({ event }),
    });

    await load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <button onClick={logEvent}>Log Event</button>

      <ul style={{ marginTop: 20 }}>
        {events.map((event, index) => (
          <li key={`${event.time}-${index}`}>
            {event.time} — {event.event}
          </li>
        ))}
      </ul>
    </div>
  );
}
