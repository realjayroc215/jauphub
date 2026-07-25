export async function GET() {
  return Response.json({
    app: 662,
    status: "online",
    agent: "active"
  });
}
