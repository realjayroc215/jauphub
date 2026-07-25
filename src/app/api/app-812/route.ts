export async function GET() {
  return Response.json({
    app: 812,
    status: "online",
    agent: "active"
  });
}
