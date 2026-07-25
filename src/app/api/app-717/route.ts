export async function GET() {
  return Response.json({
    app: 717,
    status: "online",
    agent: "active"
  });
}
