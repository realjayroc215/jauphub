export async function GET() {
  return Response.json({
    app: 420,
    status: "online",
    agent: "active"
  });
}
