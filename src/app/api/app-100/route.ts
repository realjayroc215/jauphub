export async function GET() {
  return Response.json({
    app: 100,
    status: "online",
    agent: "active"
  });
}
