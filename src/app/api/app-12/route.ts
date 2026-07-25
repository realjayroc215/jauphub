export async function GET() {
  return Response.json({
    app: 12,
    status: "online",
    agent: "active"
  });
}
