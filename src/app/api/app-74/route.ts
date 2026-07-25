export async function GET() {
  return Response.json({
    app: 74,
    status: "online",
    agent: "active"
  });
}
