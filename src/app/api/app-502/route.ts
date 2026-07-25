export async function GET() {
  return Response.json({
    app: 502,
    status: "online",
    agent: "active"
  });
}
