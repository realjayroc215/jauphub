export async function GET() {
  return Response.json({
    app: 813,
    status: "online",
    agent: "active"
  });
}
