export async function GET() {
  return Response.json({
    app: 24,
    status: "online",
    agent: "active"
  });
}
