export async function GET() {
  return Response.json({
    app: 724,
    status: "online",
    agent: "active"
  });
}
