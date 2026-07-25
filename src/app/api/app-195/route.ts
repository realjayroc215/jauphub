export async function GET() {
  return Response.json({
    app: 195,
    status: "online",
    agent: "active"
  });
}
