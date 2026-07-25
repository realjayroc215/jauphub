export async function GET() {
  return Response.json({
    app: 895,
    status: "online",
    agent: "active"
  });
}
