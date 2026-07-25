export async function GET() {
  return Response.json({
    app: 345,
    status: "online",
    agent: "active"
  });
}
