export async function GET() {
  return Response.json({
    app: 859,
    status: "online",
    agent: "active"
  });
}
