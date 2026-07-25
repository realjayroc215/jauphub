export async function GET() {
  return Response.json({
    app: 137,
    status: "online",
    agent: "active"
  });
}
