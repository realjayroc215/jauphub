export async function GET() {
  return Response.json({
    app: 356,
    status: "online",
    agent: "active"
  });
}
