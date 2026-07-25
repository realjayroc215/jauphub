export async function GET() {
  return Response.json({
    app: 436,
    status: "online",
    agent: "active"
  });
}
