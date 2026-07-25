export async function GET() {
  return Response.json({
    app: 726,
    status: "online",
    agent: "active"
  });
}
