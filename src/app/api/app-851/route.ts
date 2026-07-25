export async function GET() {
  return Response.json({
    app: 851,
    status: "online",
    agent: "active"
  });
}
