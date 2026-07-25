export async function GET() {
  return Response.json({
    app: 204,
    status: "online",
    agent: "active"
  });
}
