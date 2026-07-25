export async function GET() {
  return Response.json({
    app: 816,
    status: "online",
    agent: "active"
  });
}
