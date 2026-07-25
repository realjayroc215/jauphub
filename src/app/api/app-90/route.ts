export async function GET() {
  return Response.json({
    app: 90,
    status: "online",
    agent: "active"
  });
}
