export async function GET() {
  return Response.json({
    app: 580,
    status: "online",
    agent: "active"
  });
}
