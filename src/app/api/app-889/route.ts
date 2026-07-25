export async function GET() {
  return Response.json({
    app: 889,
    status: "online",
    agent: "active"
  });
}
