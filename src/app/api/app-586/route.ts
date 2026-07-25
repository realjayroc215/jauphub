export async function GET() {
  return Response.json({
    app: 586,
    status: "online",
    agent: "active"
  });
}
