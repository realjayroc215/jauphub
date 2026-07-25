export async function GET() {
  return Response.json({
    app: 434,
    status: "online",
    agent: "active"
  });
}
