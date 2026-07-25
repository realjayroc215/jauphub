export async function GET() {
  return Response.json({
    app: 758,
    status: "online",
    agent: "active"
  });
}
