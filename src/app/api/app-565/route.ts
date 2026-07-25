export async function GET() {
  return Response.json({
    app: 565,
    status: "online",
    agent: "active"
  });
}
