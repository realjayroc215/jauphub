export async function GET() {
  return Response.json({
    app: 125,
    status: "online",
    agent: "active"
  });
}
