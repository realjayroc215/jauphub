export async function GET() {
  return Response.json({
    app: 858,
    status: "online",
    agent: "active"
  });
}
