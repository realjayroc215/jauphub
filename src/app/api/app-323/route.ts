export async function GET() {
  return Response.json({
    app: 323,
    status: "online",
    agent: "active"
  });
}
