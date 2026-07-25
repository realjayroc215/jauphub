export async function GET() {
  return Response.json({
    app: 56,
    status: "online",
    agent: "active"
  });
}
