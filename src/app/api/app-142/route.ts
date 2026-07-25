export async function GET() {
  return Response.json({
    app: 142,
    status: "online",
    agent: "active"
  });
}
