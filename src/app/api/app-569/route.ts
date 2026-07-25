export async function GET() {
  return Response.json({
    app: 569,
    status: "online",
    agent: "active"
  });
}
