export async function GET() {
  return Response.json({
    app: 900,
    status: "online",
    agent: "active"
  });
}
