export async function GET() {
  return Response.json({
    app: 360,
    status: "online",
    agent: "active"
  });
}
