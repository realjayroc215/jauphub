export async function GET() {
  return Response.json({
    app: 408,
    status: "online",
    agent: "active"
  });
}
