export async function GET() {
  return Response.json({
    app: 695,
    status: "online",
    agent: "active"
  });
}
