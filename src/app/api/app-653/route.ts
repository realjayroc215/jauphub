export async function GET() {
  return Response.json({
    app: 653,
    status: "online",
    agent: "active"
  });
}
