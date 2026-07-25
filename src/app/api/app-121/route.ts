export async function GET() {
  return Response.json({
    app: 121,
    status: "online",
    agent: "active"
  });
}
