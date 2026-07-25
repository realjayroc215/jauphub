export async function GET() {
  return Response.json({
    app: 381,
    status: "online",
    agent: "active"
  });
}
