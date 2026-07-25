export async function GET() {
  return Response.json({
    app: 896,
    status: "online",
    agent: "active"
  });
}
