export async function GET() {
  return Response.json({
    app: 610,
    status: "online",
    agent: "active"
  });
}
