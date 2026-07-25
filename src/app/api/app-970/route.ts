export async function GET() {
  return Response.json({
    app: 970,
    status: "online",
    agent: "active"
  });
}
