export async function GET() {
  return Response.json({
    app: 205,
    status: "online",
    agent: "active"
  });
}
