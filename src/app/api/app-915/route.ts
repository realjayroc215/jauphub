export async function GET() {
  return Response.json({
    app: 915,
    status: "online",
    agent: "active"
  });
}
