export async function GET() {
  return Response.json({
    app: 216,
    status: "online",
    agent: "active"
  });
}
