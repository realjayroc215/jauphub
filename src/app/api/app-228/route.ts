export async function GET() {
  return Response.json({
    app: 228,
    status: "online",
    agent: "active"
  });
}
