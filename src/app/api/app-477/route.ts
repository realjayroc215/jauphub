export async function GET() {
  return Response.json({
    app: 477,
    status: "online",
    agent: "active"
  });
}
