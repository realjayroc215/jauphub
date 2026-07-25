export async function GET() {
  return Response.json({
    app: 95,
    status: "online",
    agent: "active"
  });
}
