export async function GET() {
  return Response.json({
    app: 288,
    status: "online",
    agent: "active"
  });
}
