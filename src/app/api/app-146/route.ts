export async function GET() {
  return Response.json({
    app: 146,
    status: "online",
    agent: "active"
  });
}
