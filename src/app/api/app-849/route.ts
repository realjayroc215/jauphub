export async function GET() {
  return Response.json({
    app: 849,
    status: "online",
    agent: "active"
  });
}
