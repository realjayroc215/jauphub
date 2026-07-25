export async function GET() {
  return Response.json({
    app: 16,
    status: "online",
    agent: "active"
  });
}
