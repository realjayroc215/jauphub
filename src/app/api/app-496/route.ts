export async function GET() {
  return Response.json({
    app: 496,
    status: "online",
    agent: "active"
  });
}
