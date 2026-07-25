import { OfficeAgent } from '../../../core/office';

const agent = new OfficeAgent();

export async function GET() {
  return Response.json({
    tasks: agent.getTasks(),
  });
}

export async function POST(req: Request) {
  const { task } = await req.json();
  agent.addTask(task);
  return Response.json({ added: task });
}

export async function PUT() {
  agent.runTasks();
  return Response.json({ status: 'completed' });
}
