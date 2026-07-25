export async function GET() {
  return Response.json({
    app: 683,
    status: "online",
    agent: "active"
  });
}
