export async function GET() {
  return Response.json({
    app: 432,
    status: "online",
    agent: "active"
  });
}
