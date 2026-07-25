export async function GET() {
  return Response.json({
    app: 129,
    status: "online",
    agent: "active"
  });
}
