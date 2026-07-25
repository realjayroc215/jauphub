export async function GET() {
  return Response.json({
    app: 421,
    status: "online",
    agent: "active"
  });
}
