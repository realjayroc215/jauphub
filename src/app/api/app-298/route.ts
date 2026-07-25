export async function GET() {
  return Response.json({
    app: 298,
    status: "online",
    agent: "active"
  });
}
