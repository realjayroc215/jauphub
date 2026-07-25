export async function GET() {
  return Response.json({
    app: 213,
    status: "online",
    agent: "active"
  });
}
