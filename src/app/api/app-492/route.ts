export async function GET() {
  return Response.json({
    app: 492,
    status: "online",
    agent: "active"
  });
}
