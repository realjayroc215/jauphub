export async function GET() {
  return Response.json({
    app: 800,
    status: "online",
    agent: "active"
  });
}
