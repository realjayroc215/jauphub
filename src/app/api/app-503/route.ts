export async function GET() {
  return Response.json({
    app: 503,
    status: "online",
    agent: "active"
  });
}
