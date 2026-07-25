export async function GET() {
  return Response.json({
    app: 747,
    status: "online",
    agent: "active"
  });
}
