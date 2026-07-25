export async function GET() {
  return Response.json({
    app: 271,
    status: "online",
    agent: "active"
  });
}
