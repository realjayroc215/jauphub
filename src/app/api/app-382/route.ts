export async function GET() {
  return Response.json({
    app: 382,
    status: "online",
    agent: "active"
  });
}
