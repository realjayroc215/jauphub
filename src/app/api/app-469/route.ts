export async function GET() {
  return Response.json({
    app: 469,
    status: "online",
    agent: "active"
  });
}
