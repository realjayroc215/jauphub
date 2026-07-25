export async function GET() {
  return Response.json({
    app: 846,
    status: "online",
    agent: "active"
  });
}
