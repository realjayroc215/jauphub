export async function GET() {
  return Response.json({
    app: 6,
    status: "online",
    agent: "active"
  });
}
