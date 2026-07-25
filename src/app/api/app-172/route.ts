export async function GET() {
  return Response.json({
    app: 172,
    status: "online",
    agent: "active"
  });
}
