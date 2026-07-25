export async function GET() {
  return Response.json({
    app: 527,
    status: "online",
    agent: "active"
  });
}
