export async function GET() {
  return Response.json({
    app: 514,
    status: "online",
    agent: "active"
  });
}
