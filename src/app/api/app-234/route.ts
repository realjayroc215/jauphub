export async function GET() {
  return Response.json({
    app: 234,
    status: "online",
    agent: "active"
  });
}
