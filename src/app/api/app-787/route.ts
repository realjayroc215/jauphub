export async function GET() {
  return Response.json({
    app: 787,
    status: "online",
    agent: "active"
  });
}
