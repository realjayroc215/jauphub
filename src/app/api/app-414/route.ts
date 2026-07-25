export async function GET() {
  return Response.json({
    app: 414,
    status: "online",
    agent: "active"
  });
}
