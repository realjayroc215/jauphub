export async function GET() {
  return Response.json({
    app: 44,
    status: "online",
    agent: "active"
  });
}
