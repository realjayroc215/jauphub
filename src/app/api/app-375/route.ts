export async function GET() {
  return Response.json({
    app: 375,
    status: "online",
    agent: "active"
  });
}
