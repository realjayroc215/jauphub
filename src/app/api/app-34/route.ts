export async function GET() {
  return Response.json({
    app: 34,
    status: "online",
    agent: "active"
  });
}
