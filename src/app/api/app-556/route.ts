export async function GET() {
  return Response.json({
    app: 556,
    status: "online",
    agent: "active"
  });
}
