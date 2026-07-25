export async function GET() {
  return Response.json({
    app: 82,
    status: "online",
    agent: "active"
  });
}
