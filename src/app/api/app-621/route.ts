export async function GET() {
  return Response.json({
    app: 621,
    status: "online",
    agent: "active"
  });
}
