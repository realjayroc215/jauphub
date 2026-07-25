export async function GET() {
  return Response.json({
    app: 798,
    status: "online",
    agent: "active"
  });
}
