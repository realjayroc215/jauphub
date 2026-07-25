export async function GET() {
  return Response.json({
    app: 882,
    status: "online",
    agent: "active"
  });
}
