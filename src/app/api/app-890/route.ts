export async function GET() {
  return Response.json({
    app: 890,
    status: "online",
    agent: "active"
  });
}
