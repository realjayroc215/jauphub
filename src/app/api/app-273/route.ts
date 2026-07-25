export async function GET() {
  return Response.json({
    app: 273,
    status: "online",
    agent: "active"
  });
}
