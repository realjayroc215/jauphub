export async function GET() {
  return Response.json({
    app: 623,
    status: "online",
    agent: "active"
  });
}
