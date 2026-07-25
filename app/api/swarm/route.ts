import { SwarmController } from '../../../core/swarm';
import { JAUPLog } from '../../../core/log';

const swarm = new SwarmController(4);

function getSwarmBinding() {
  return (globalThis as any).SWARM_STATE;
}

export async function GET() {
  return Response.json({
    agents: swarm.getStatus(),
  });
}

export async function POST(req: Request) {
  const { task } = await req.json();
  swarm.assignTask(task);
  JAUPLog.write('swarm', `Assigned new task: ${task}`);

  const swarmBinding = getSwarmBinding();
  if (swarmBinding && typeof swarmBinding.idFromName === 'function') {
    const id = swarmBinding.idFromName('global');
    const obj = swarmBinding.get(id);
    return obj.fetch(req);
  }

  return Response.json({ assigned: task });
}
