export async function GET() {
  return Response.json({
    app: 427,
    status: "online",
    agent: "active"
  });
}
