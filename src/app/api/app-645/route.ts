export async function GET() {
  return Response.json({
    app: 645,
    status: "online",
    agent: "active"
  });
}
