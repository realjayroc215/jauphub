export async function GET() {
  return Response.json({
    app: 804,
    status: "online",
    agent: "active"
  });
}
