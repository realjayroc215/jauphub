export async function GET() {
  return Response.json({
    app: 220,
    status: "online",
    agent: "active"
  });
}
