export async function GET() {
  return Response.json({
    app: 735,
    status: "online",
    agent: "active"
  });
}
