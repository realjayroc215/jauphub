export async function GET() {
  return Response.json({
    app: 115,
    status: "online",
    agent: "active"
  });
}
