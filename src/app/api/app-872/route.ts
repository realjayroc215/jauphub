export async function GET() {
  return Response.json({
    app: 872,
    status: "online",
    agent: "active"
  });
}
