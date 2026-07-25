export async function GET() {
  return Response.json({
    app: 378,
    status: "online",
    agent: "active"
  });
}
