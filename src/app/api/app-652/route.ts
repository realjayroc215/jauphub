export async function GET() {
  return Response.json({
    app: 652,
    status: "online",
    agent: "active"
  });
}
