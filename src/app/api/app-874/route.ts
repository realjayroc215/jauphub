export async function GET() {
  return Response.json({
    app: 874,
    status: "online",
    agent: "active"
  });
}
