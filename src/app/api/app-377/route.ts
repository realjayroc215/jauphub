export async function GET() {
  return Response.json({
    app: 377,
    status: "online",
    agent: "active"
  });
}
