export async function GET() {
  return Response.json({
    app: 824,
    status: "online",
    agent: "active"
  });
}
