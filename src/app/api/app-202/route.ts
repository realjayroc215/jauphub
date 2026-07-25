export async function GET() {
  return Response.json({
    app: 202,
    status: "online",
    agent: "active"
  });
}
