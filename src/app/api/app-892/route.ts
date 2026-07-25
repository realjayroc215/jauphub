export async function GET() {
  return Response.json({
    app: 892,
    status: "online",
    agent: "active"
  });
}
