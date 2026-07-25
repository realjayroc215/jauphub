export async function GET() {
  return Response.json({
    app: 188,
    status: "online",
    agent: "active"
  });
}
