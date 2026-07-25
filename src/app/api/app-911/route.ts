export async function GET() {
  return Response.json({
    app: 911,
    status: "online",
    agent: "active"
  });
}
