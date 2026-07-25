export async function GET() {
  return Response.json({
    app: 215,
    status: "online",
    agent: "active"
  });
}
