export async function GET() {
  return Response.json({
    app: 468,
    status: "online",
    agent: "active"
  });
}
