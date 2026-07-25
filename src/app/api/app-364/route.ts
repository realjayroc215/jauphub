export async function GET() {
  return Response.json({
    app: 364,
    status: "online",
    agent: "active"
  });
}
