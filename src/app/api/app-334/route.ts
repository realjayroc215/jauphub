export async function GET() {
  return Response.json({
    app: 334,
    status: "online",
    agent: "active"
  });
}
