export async function GET() {
  return Response.json({
    app: 80,
    status: "online",
    agent: "active"
  });
}
