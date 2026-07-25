export async function GET() {
  return Response.json({
    app: 498,
    status: "online",
    agent: "active"
  });
}
