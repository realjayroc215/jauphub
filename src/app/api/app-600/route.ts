export async function GET() {
  return Response.json({
    app: 600,
    status: "online",
    agent: "active"
  });
}
