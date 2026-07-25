export async function GET() {
  return Response.json({
    app: 620,
    status: "online",
    agent: "active"
  });
}
