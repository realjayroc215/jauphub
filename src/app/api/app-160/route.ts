export async function GET() {
  return Response.json({
    app: 160,
    status: "online",
    agent: "active"
  });
}
