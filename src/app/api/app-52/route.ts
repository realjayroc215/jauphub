export async function GET() {
  return Response.json({
    app: 52,
    status: "online",
    agent: "active"
  });
}
