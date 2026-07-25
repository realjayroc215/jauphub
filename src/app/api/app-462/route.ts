export async function GET() {
  return Response.json({
    app: 462,
    status: "online",
    agent: "active"
  });
}
