export async function GET() {
  return Response.json({
    app: 411,
    status: "online",
    agent: "active"
  });
}
