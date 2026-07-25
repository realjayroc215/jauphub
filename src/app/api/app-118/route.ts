export async function GET() {
  return Response.json({
    app: 118,
    status: "online",
    agent: "active"
  });
}
