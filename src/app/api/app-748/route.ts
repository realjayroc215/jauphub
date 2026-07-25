export async function GET() {
  return Response.json({
    app: 748,
    status: "online",
    agent: "active"
  });
}
