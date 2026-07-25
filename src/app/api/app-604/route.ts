export async function GET() {
  return Response.json({
    app: 604,
    status: "online",
    agent: "active"
  });
}
