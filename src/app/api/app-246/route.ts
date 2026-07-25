export async function GET() {
  return Response.json({
    app: 246,
    status: "online",
    agent: "active"
  });
}
