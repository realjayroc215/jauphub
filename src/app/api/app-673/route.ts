export async function GET() {
  return Response.json({
    app: 673,
    status: "online",
    agent: "active"
  });
}
