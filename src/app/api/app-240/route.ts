export async function GET() {
  return Response.json({
    app: 240,
    status: "online",
    agent: "active"
  });
}
