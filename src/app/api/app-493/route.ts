export async function GET() {
  return Response.json({
    app: 493,
    status: "online",
    agent: "active"
  });
}
