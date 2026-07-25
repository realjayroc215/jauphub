export async function GET() {
  return Response.json({
    app: 13,
    status: "online",
    agent: "active"
  });
}
