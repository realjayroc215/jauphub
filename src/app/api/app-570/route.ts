export async function GET() {
  return Response.json({
    app: 570,
    status: "online",
    agent: "active"
  });
}
