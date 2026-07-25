export async function GET() {
  return Response.json({
    app: 247,
    status: "online",
    agent: "active"
  });
}
