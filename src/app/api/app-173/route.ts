export async function GET() {
  return Response.json({
    app: 173,
    status: "online",
    agent: "active"
  });
}
