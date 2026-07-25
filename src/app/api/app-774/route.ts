export async function GET() {
  return Response.json({
    app: 774,
    status: "online",
    agent: "active"
  });
}
