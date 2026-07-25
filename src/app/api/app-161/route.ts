export async function GET() {
  return Response.json({
    app: 161,
    status: "online",
    agent: "active"
  });
}
