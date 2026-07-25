export async function GET() {
  return Response.json({
    app: 255,
    status: "online",
    agent: "active"
  });
}
