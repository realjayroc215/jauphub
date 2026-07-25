export async function GET() {
  return Response.json({
    app: 291,
    status: "online",
    agent: "active"
  });
}
