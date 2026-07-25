export async function GET() {
  return Response.json({
    app: 870,
    status: "online",
    agent: "active"
  });
}
