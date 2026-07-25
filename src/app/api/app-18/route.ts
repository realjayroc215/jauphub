export async function GET() {
  return Response.json({
    app: 18,
    status: "online",
    agent: "active"
  });
}
