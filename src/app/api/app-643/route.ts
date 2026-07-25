export async function GET() {
  return Response.json({
    app: 643,
    status: "online",
    agent: "active"
  });
}
