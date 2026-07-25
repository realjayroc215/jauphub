export async function GET() {
  return Response.json({
    app: 920,
    status: "online",
    agent: "active"
  });
}
