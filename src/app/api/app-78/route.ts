export async function GET() {
  return Response.json({
    app: 78,
    status: "online",
    agent: "active"
  });
}
