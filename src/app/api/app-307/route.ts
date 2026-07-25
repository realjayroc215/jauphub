export async function GET() {
  return Response.json({
    app: 307,
    status: "online",
    agent: "active"
  });
}
