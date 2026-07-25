export async function GET() {
  return Response.json({
    app: 745,
    status: "online",
    agent: "active"
  });
}
