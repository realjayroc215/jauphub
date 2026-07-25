export async function GET() {
  return Response.json({
    app: 103,
    status: "online",
    agent: "active"
  });
}
