export async function GET() {
  return Response.json({
    app: 311,
    status: "online",
    agent: "active"
  });
}
