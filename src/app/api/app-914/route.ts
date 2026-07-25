export async function GET() {
  return Response.json({
    app: 914,
    status: "online",
    agent: "active"
  });
}
