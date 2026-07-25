export async function GET() {
  return Response.json({
    app: 507,
    status: "online",
    agent: "active"
  });
}
