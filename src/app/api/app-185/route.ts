export async function GET() {
  return Response.json({
    app: 185,
    status: "online",
    agent: "active"
  });
}
