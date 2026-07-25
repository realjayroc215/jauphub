export async function GET() {
  return Response.json({
    app: 668,
    status: "online",
    agent: "active"
  });
}
