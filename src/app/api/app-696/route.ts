export async function GET() {
  return Response.json({
    app: 696,
    status: "online",
    agent: "active"
  });
}
