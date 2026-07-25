export async function GET() {
  return Response.json({
    app: 641,
    status: "online",
    agent: "active"
  });
}
