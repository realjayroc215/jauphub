export async function GET() {
  return Response.json({
    app: 67,
    status: "online",
    agent: "active"
  });
}
