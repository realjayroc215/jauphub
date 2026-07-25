export async function GET() {
  return Response.json({
    app: 156,
    status: "online",
    agent: "active"
  });
}
