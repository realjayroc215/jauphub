export async function GET() {
  return Response.json({
    app: 210,
    status: "online",
    agent: "active"
  });
}
