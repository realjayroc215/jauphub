export async function GET() {
  return Response.json({
    app: 85,
    status: "online",
    agent: "active"
  });
}
