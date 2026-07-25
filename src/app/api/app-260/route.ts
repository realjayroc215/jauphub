export async function GET() {
  return Response.json({
    app: 260,
    status: "online",
    agent: "active"
  });
}
