export async function GET() {
  return Response.json({
    app: 89,
    status: "online",
    agent: "active"
  });
}
