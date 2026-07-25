export async function GET() {
  return Response.json({
    app: 828,
    status: "online",
    agent: "active"
  });
}
