export async function GET() {
  return Response.json({
    app: 960,
    status: "online",
    agent: "active"
  });
}
