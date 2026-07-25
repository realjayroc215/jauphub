export async function GET() {
  return Response.json({
    app: 767,
    status: "online",
    agent: "active"
  });
}
