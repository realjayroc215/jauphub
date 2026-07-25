export async function GET() {
  return Response.json({
    app: 405,
    status: "online",
    agent: "active"
  });
}
