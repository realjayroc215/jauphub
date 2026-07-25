export async function GET() {
  return Response.json({
    app: 789,
    status: "online",
    agent: "active"
  });
}
