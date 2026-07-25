export async function GET() {
  return Response.json({
    app: 152,
    status: "online",
    agent: "active"
  });
}
