export async function GET() {
  return Response.json({
    app: 456,
    status: "online",
    agent: "active"
  });
}
