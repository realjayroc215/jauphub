export async function GET() {
  return Response.json({
    app: 346,
    status: "online",
    agent: "active"
  });
}
