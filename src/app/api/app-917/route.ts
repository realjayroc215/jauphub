export async function GET() {
  return Response.json({
    app: 917,
    status: "online",
    agent: "active"
  });
}
