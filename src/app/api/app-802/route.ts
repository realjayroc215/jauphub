export async function GET() {
  return Response.json({
    app: 802,
    status: "online",
    agent: "active"
  });
}
