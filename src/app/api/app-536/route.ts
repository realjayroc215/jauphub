export async function GET() {
  return Response.json({
    app: 536,
    status: "online",
    agent: "active"
  });
}
