export async function GET() {
  return Response.json({
    app: 200,
    status: "online",
    agent: "active"
  });
}
