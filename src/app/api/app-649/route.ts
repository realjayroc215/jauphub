export async function GET() {
  return Response.json({
    app: 649,
    status: "online",
    agent: "active"
  });
}
