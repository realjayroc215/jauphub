export async function GET() {
  return Response.json({
    app: 268,
    status: "online",
    agent: "active"
  });
}
