export async function GET() {
  return Response.json({
    app: 629,
    status: "online",
    agent: "active"
  });
}
