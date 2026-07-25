export async function GET() {
  return Response.json({
    app: 175,
    status: "online",
    agent: "active"
  });
}
