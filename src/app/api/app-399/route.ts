export async function GET() {
  return Response.json({
    app: 399,
    status: "online",
    agent: "active"
  });
}
