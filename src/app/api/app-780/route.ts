export async function GET() {
  return Response.json({
    app: 780,
    status: "online",
    agent: "active"
  });
}
