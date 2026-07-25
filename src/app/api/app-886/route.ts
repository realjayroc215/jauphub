export async function GET() {
  return Response.json({
    app: 886,
    status: "online",
    agent: "active"
  });
}
