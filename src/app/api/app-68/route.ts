export async function GET() {
  return Response.json({
    app: 68,
    status: "online",
    agent: "active"
  });
}
