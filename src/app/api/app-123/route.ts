export async function GET() {
  return Response.json({
    app: 123,
    status: "online",
    agent: "active"
  });
}
