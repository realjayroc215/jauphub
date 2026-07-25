export async function GET() {
  return Response.json({
    app: 144,
    status: "online",
    agent: "active"
  });
}
