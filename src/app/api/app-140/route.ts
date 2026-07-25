export async function GET() {
  return Response.json({
    app: 140,
    status: "online",
    agent: "active"
  });
}
