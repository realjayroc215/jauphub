export interface SwarmAgent {
  id: string;
  task: string;
  status: 'idle' | 'running' | 'error';
}

export class SwarmController {
  agents: SwarmAgent[] = [];

  constructor(count = 4) {
    for (let i = 0; i < count; i++) {
      this.agents.push({
        id: `agent-${i + 1}`,
        task: 'none',
        status: 'idle',
      });
    }
  }

  assignTask(task: string) {
    this.agents.forEach((agent) => {
      agent.task = task;
      agent.status = 'running';
    });
  }

  getStatus() {
    return this.agents;
  }
}
