export async function GET() {
  return Response.json({
    app: 766,
    status: "online",
    agent: "active"
  });
}
