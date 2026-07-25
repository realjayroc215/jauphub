export async function GET() {
  return Response.json({
    app: 742,
    status: "online",
    agent: "active"
  });
}
