export async function GET() {
  return Response.json({
    app: 235,
    status: "online",
    agent: "active"
  });
}
