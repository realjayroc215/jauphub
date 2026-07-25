export async function GET() {
  return Response.json({
    app: 738,
    status: "online",
    agent: "active"
  });
}
