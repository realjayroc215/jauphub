export async function GET() {
  return Response.json({
    app: 8,
    status: "online",
    agent: "active"
  });
}
