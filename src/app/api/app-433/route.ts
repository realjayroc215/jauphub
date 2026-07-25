export async function GET() {
  return Response.json({
    app: 433,
    status: "online",
    agent: "active"
  });
}
