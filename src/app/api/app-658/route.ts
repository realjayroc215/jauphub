export async function GET() {
  return Response.json({
    app: 658,
    status: "online",
    agent: "active"
  });
}
