export async function GET() {
  return Response.json({
    app: 361,
    status: "online",
    agent: "active"
  });
}
