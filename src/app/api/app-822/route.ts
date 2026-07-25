export async function GET() {
  return Response.json({
    app: 822,
    status: "online",
    agent: "active"
  });
}
