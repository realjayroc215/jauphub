export async function GET() {
  return Response.json({
    app: 358,
    status: "online",
    agent: "active"
  });
}
