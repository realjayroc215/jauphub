export async function GET() {
  return Response.json({
    app: 212,
    status: "online",
    agent: "active"
  });
}
