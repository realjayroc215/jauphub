export async function GET() {
  return Response.json({
    app: 869,
    status: "online",
    agent: "active"
  });
}
