export async function GET() {
  return Response.json({
    app: 133,
    status: "online",
    agent: "active"
  });
}
