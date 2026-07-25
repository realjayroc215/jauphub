export async function GET() {
  return Response.json({
    app: 867,
    status: "online",
    agent: "active"
  });
}
