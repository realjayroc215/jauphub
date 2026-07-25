export async function GET() {
  return Response.json({
    app: 791,
    status: "online",
    agent: "active"
  });
}
