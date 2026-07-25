export async function GET() {
  return Response.json({
    app: 740,
    status: "online",
    agent: "active"
  });
}
