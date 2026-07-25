export async function GET() {
  return Response.json({
    app: 719,
    status: "online",
    agent: "active"
  });
}
