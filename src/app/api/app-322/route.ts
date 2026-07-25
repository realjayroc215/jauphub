export async function GET() {
  return Response.json({
    app: 322,
    status: "online",
    agent: "active"
  });
}
