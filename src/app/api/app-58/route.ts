export async function GET() {
  return Response.json({
    app: 58,
    status: "online",
    agent: "active"
  });
}
