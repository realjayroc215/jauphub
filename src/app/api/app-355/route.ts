export async function GET() {
  return Response.json({
    app: 355,
    status: "online",
    agent: "active"
  });
}
