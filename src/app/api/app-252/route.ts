export async function GET() {
  return Response.json({
    app: 252,
    status: "online",
    agent: "active"
  });
}
