export async function GET() {
  return Response.json({
    app: 151,
    status: "online",
    agent: "active"
  });
}
