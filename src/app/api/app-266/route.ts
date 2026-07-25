export async function GET() {
  return Response.json({
    app: 266,
    status: "online",
    agent: "active"
  });
}
