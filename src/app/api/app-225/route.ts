export async function GET() {
  return Response.json({
    app: 225,
    status: "online",
    agent: "active"
  });
}
