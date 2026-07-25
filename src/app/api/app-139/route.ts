export async function GET() {
  return Response.json({
    app: 139,
    status: "online",
    agent: "active"
  });
}
