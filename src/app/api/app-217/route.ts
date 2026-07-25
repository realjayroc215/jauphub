export async function GET() {
  return Response.json({
    app: 217,
    status: "online",
    agent: "active"
  });
}
