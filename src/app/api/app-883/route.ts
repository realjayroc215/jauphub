export async function GET() {
  return Response.json({
    app: 883,
    status: "online",
    agent: "active"
  });
}
