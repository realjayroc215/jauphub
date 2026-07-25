export async function GET() {
  return Response.json({
    app: 831,
    status: "online",
    agent: "active"
  });
}
