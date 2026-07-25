export async function GET() {
  return Response.json({
    app: 718,
    status: "online",
    agent: "active"
  });
}
