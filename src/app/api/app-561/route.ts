export async function GET() {
  return Response.json({
    app: 561,
    status: "online",
    agent: "active"
  });
}
