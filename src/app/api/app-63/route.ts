export async function GET() {
  return Response.json({
    app: 63,
    status: "online",
    agent: "active"
  });
}
