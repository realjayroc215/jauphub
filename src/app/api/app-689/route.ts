export async function GET() {
  return Response.json({
    app: 689,
    status: "online",
    agent: "active"
  });
}
