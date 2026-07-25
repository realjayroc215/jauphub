export async function GET() {
  return Response.json({
    app: 707,
    status: "online",
    agent: "active"
  });
}
