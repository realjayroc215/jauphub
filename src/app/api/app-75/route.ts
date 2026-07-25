export async function GET() {
  return Response.json({
    app: 75,
    status: "online",
    agent: "active"
  });
}
