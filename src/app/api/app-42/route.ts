export async function GET() {
  return Response.json({
    app: 42,
    status: "online",
    agent: "active"
  });
}
