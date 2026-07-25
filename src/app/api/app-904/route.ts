export async function GET() {
  return Response.json({
    app: 904,
    status: "online",
    agent: "active"
  });
}
