export async function GET() {
  return Response.json({
    app: 876,
    status: "online",
    agent: "active"
  });
}
