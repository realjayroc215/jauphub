export async function GET() {
  return Response.json({
    app: 782,
    status: "online",
    agent: "active"
  });
}
