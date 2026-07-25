export async function GET() {
  return Response.json({
    app: 501,
    status: "online",
    agent: "active"
  });
}
