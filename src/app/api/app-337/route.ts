export async function GET() {
  return Response.json({
    app: 337,
    status: "online",
    agent: "active"
  });
}
