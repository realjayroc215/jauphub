export async function GET() {
  return Response.json({
    app: 69,
    status: "online",
    agent: "active"
  });
}
