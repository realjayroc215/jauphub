export async function GET() {
  return Response.json({
    app: 840,
    status: "online",
    agent: "active"
  });
}
