export async function GET() {
  return Response.json({
    app: 245,
    status: "online",
    agent: "active"
  });
}
