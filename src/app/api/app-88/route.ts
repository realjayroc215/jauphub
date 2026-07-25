export async function GET() {
  return Response.json({
    app: 88,
    status: "online",
    agent: "active"
  });
}
