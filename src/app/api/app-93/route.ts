export async function GET() {
  return Response.json({
    app: 93,
    status: "online",
    agent: "active"
  });
}
