export async function GET() {
  return Response.json({
    app: 395,
    status: "online",
    agent: "active"
  });
}
