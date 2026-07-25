export async function GET() {
  return Response.json({
    app: 363,
    status: "online",
    agent: "active"
  });
}
