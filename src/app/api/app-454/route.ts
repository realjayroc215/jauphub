export async function GET() {
  return Response.json({
    app: 454,
    status: "online",
    agent: "active"
  });
}
