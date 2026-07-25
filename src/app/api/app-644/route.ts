export async function GET() {
  return Response.json({
    app: 644,
    status: "online",
    agent: "active"
  });
}
