export async function GET() {
  return Response.json({
    app: 510,
    status: "online",
    agent: "active"
  });
}
