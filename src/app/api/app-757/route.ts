export async function GET() {
  return Response.json({
    app: 757,
    status: "online",
    agent: "active"
  });
}
