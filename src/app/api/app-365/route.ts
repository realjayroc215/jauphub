export async function GET() {
  return Response.json({
    app: 365,
    status: "online",
    agent: "active"
  });
}
