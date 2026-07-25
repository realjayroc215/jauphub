export async function GET() {
  return Response.json({
    app: 484,
    status: "online",
    agent: "active"
  });
}
