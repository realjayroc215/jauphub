export async function GET() {
  return Response.json({
    app: 931,
    status: "online",
    agent: "active"
  });
}
