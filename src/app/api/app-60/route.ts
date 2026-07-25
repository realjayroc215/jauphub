export async function GET() {
  return Response.json({
    app: 60,
    status: "online",
    agent: "active"
  });
}
