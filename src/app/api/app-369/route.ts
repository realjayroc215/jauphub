export async function GET() {
  return Response.json({
    app: 369,
    status: "online",
    agent: "active"
  });
}
