export async function GET() {
  return Response.json({
    app: 961,
    status: "online",
    agent: "active"
  });
}
