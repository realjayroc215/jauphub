export async function GET() {
  return Response.json({
    app: 2,
    status: "online",
    agent: "active"
  });
}
