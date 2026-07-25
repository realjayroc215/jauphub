export async function GET() {
  return Response.json({
    app: 147,
    status: "online",
    agent: "active"
  });
}
