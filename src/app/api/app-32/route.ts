export async function GET() {
  return Response.json({
    app: 32,
    status: "online",
    agent: "active"
  });
}
