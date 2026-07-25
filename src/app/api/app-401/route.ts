export async function GET() {
  return Response.json({
    app: 401,
    status: "online",
    agent: "active"
  });
}
