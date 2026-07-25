export async function GET() {
  return Response.json({
    app: 553,
    status: "online",
    agent: "active"
  });
}
