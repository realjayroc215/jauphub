export async function GET() {
  return Response.json({
    app: 948,
    status: "online",
    agent: "active"
  });
}
