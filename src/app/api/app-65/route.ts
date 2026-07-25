export async function GET() {
  return Response.json({
    app: 65,
    status: "online",
    agent: "active"
  });
}
