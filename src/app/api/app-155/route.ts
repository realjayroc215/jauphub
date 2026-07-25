export async function GET() {
  return Response.json({
    app: 155,
    status: "online",
    agent: "active"
  });
}
