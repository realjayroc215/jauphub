export async function GET() {
  return Response.json({
    app: 854,
    status: "online",
    agent: "active"
  });
}
