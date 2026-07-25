export async function GET() {
  return Response.json({
    app: 483,
    status: "online",
    agent: "active"
  });
}
