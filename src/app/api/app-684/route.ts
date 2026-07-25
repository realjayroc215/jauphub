export async function GET() {
  return Response.json({
    app: 684,
    status: "online",
    agent: "active"
  });
}
