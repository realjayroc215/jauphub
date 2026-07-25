export async function GET() {
  return Response.json({
    app: 997,
    status: "online",
    agent: "active"
  });
}
