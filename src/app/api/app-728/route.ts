export async function GET() {
  return Response.json({
    app: 728,
    status: "online",
    agent: "active"
  });
}
