export async function GET() {
  return Response.json({
    app: 744,
    status: "online",
    agent: "active"
  });
}
