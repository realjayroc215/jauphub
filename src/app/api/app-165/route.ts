export async function GET() {
  return Response.json({
    app: 165,
    status: "online",
    agent: "active"
  });
}
