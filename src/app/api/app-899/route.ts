export async function GET() {
  return Response.json({
    app: 899,
    status: "online",
    agent: "active"
  });
}
