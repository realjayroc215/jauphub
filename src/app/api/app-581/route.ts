export async function GET() {
  return Response.json({
    app: 581,
    status: "online",
    agent: "active"
  });
}
