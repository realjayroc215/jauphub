export async function GET() {
  return Response.json({
    app: 14,
    status: "online",
    agent: "active"
  });
}
