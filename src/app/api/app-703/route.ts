export async function GET() {
  return Response.json({
    app: 703,
    status: "online",
    agent: "active"
  });
}
