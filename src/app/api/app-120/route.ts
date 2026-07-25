export async function GET() {
  return Response.json({
    app: 120,
    status: "online",
    agent: "active"
  });
}
