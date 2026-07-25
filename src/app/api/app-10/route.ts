export async function GET() {
  return Response.json({
    app: 10,
    status: "online",
    agent: "active"
  });
}
