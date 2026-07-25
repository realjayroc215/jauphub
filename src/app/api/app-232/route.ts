export async function GET() {
  return Response.json({
    app: 232,
    status: "online",
    agent: "active"
  });
}
