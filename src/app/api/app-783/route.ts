export async function GET() {
  return Response.json({
    app: 783,
    status: "online",
    agent: "active"
  });
}
