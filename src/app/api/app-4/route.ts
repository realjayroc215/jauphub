export async function GET() {
  return Response.json({
    app: 4,
    status: "online",
    agent: "active"
  });
}
