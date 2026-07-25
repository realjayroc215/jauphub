export async function GET() {
  return Response.json({
    app: 99,
    status: "online",
    agent: "active"
  });
}
