export async function GET() {
  return Response.json({
    app: 551,
    status: "online",
    agent: "active"
  });
}
