export async function GET() {
  return Response.json({
    app: 998,
    status: "online",
    agent: "active"
  });
}
