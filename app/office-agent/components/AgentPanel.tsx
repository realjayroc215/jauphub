"use client";

import { useEffect, useState } from 'react';

export default function AgentPanel() {
  const [tasks, setTasks] = useState<Array<{ task: string; status: string }>>([]);

  async function load() {
    const res = await fetch('/api/office');
    const data = await res.json();
    setTasks(data.tasks ?? []);
  }

  async function addTask() {
    const task = window.prompt('New task?');
    if (!task) return;

    await fetch('/api/office', {
      method: 'POST',
      body: JSON.stringify({ task }),
    });

    await load();
  }

  async function runTasks() {
    await fetch('/api/office', { method: 'PUT' });
    await load();
  }

  useEffect(() => {
    load();
  }, []);

  return (
    <div>
      <button onClick={addTask}>Add Task</button>
      <button onClick={runTasks} style={{ marginLeft: 10 }}>
        Run Tasks
      </button>

      <ul style={{ marginTop: 20 }}>
        {tasks.map((task, index) => (
          <li key={`${task.task}-${index}`}>
            {task.task} — {task.status}
          </li>
        ))}
      </ul>
    </div>
  );
}
