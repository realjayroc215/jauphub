export async function GET() {
  return Response.json({
    app: 72,
    status: "online",
    agent: "active"
  });
}
