export async function GET() {
  return Response.json({
    app: 994,
    status: "online",
    agent: "active"
  });
}
