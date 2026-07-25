export async function GET() {
  return Response.json({
    app: 71,
    status: "online",
    agent: "active"
  });
}
