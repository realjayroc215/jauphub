export async function GET() {
  return Response.json({
    app: 342,
    status: "online",
    agent: "active"
  });
}
