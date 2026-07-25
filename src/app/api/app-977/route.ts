export async function GET() {
  return Response.json({
    app: 977,
    status: "online",
    agent: "active"
  });
}
