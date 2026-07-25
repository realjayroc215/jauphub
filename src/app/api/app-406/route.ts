export async function GET() {
  return Response.json({
    app: 406,
    status: "online",
    agent: "active"
  });
}
