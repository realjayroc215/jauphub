export async function GET() {
  return Response.json({
    app: 705,
    status: "online",
    agent: "active"
  });
}
