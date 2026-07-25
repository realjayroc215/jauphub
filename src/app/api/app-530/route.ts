export async function GET() {
  return Response.json({
    app: 530,
    status: "online",
    agent: "active"
  });
}
