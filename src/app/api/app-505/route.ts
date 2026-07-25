export async function GET() {
  return Response.json({
    app: 505,
    status: "online",
    agent: "active"
  });
}
