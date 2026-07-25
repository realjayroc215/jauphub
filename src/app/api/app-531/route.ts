export async function GET() {
  return Response.json({
    app: 531,
    status: "online",
    agent: "active"
  });
}
