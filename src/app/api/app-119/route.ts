export async function GET() {
  return Response.json({
    app: 119,
    status: "online",
    agent: "active"
  });
}
