export async function GET() {
  return Response.json({
    app: 885,
    status: "online",
    agent: "active"
  });
}
