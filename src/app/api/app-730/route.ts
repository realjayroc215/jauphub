export async function GET() {
  return Response.json({
    app: 730,
    status: "online",
    agent: "active"
  });
}
