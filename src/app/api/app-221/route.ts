export async function GET() {
  return Response.json({
    app: 221,
    status: "online",
    agent: "active"
  });
}
