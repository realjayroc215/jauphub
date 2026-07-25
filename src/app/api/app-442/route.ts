export async function GET() {
  return Response.json({
    app: 442,
    status: "online",
    agent: "active"
  });
}
