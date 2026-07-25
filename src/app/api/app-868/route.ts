export async function GET() {
  return Response.json({
    app: 868,
    status: "online",
    agent: "active"
  });
}
