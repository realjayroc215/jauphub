export async function GET() {
  return Response.json({
    app: 180,
    status: "online",
    agent: "active"
  });
}
