export async function GET() {
  return Response.json({
    app: 162,
    status: "online",
    agent: "active"
  });
}
