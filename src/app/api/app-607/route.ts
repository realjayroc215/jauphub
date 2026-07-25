export async function GET() {
  return Response.json({
    app: 607,
    status: "online",
    agent: "active"
  });
}
