export async function GET() {
  return Response.json({
    app: 598,
    status: "online",
    agent: "active"
  });
}
