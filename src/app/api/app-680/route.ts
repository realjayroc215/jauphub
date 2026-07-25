export async function GET() {
  return Response.json({
    app: 680,
    status: "online",
    agent: "active"
  });
}
