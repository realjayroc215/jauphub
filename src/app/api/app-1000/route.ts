export async function GET() {
  return Response.json({
    app: 1000,
    status: "online",
    agent: "active"
  });
}
