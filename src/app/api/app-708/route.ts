export async function GET() {
  return Response.json({
    app: 708,
    status: "online",
    agent: "active"
  });
}
