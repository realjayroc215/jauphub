export async function GET() {
  return Response.json({
    app: 452,
    status: "online",
    agent: "active"
  });
}
