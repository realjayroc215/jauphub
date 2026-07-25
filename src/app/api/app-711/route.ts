export async function GET() {
  return Response.json({
    app: 711,
    status: "online",
    agent: "active"
  });
}
