export async function GET() {
  return Response.json({
    app: 769,
    status: "online",
    agent: "active"
  });
}
