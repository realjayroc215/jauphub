export async function GET() {
  return Response.json({
    app: 48,
    status: "online",
    agent: "active"
  });
}
