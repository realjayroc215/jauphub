export async function GET() {
  return Response.json({
    app: 826,
    status: "online",
    agent: "active"
  });
}
