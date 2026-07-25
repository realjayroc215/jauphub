export async function GET() {
  return Response.json({
    app: 28,
    status: "online",
    agent: "active"
  });
}
