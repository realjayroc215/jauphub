export async function GET() {
  return Response.json({
    app: 49,
    status: "online",
    agent: "active"
  });
}
