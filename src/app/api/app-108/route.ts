export async function GET() {
  return Response.json({
    app: 108,
    status: "online",
    agent: "active"
  });
}
