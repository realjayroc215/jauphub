export async function GET() {
  return Response.json({
    app: 549,
    status: "online",
    agent: "active"
  });
}
