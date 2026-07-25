export async function GET() {
  return Response.json({
    app: 73,
    status: "online",
    agent: "active"
  });
}
