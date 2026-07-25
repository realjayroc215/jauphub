export async function GET() {
  return Response.json({
    app: 102,
    status: "online",
    agent: "active"
  });
}
