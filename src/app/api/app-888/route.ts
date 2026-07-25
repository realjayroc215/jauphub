export async function GET() {
  return Response.json({
    app: 888,
    status: "online",
    agent: "active"
  });
}
