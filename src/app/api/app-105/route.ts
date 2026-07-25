export async function GET() {
  return Response.json({
    app: 105,
    status: "online",
    agent: "active"
  });
}
