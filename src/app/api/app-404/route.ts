export async function GET() {
  return Response.json({
    app: 404,
    status: "online",
    agent: "active"
  });
}
