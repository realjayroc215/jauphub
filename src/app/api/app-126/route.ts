export async function GET() {
  return Response.json({
    app: 126,
    status: "online",
    agent: "active"
  });
}
