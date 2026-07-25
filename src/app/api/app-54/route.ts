export async function GET() {
  return Response.json({
    app: 54,
    status: "online",
    agent: "active"
  });
}
