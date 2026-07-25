export async function GET() {
  return Response.json({ service: "swarm", status: "online", agents: 4 });
}
