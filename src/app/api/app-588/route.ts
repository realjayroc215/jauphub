export async function GET() {
  return Response.json({
    app: 588,
    status: "online",
    agent: "active"
  });
}
