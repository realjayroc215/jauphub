export async function GET() {
  return Response.json({
    app: 92,
    status: "online",
    agent: "active"
  });
}
