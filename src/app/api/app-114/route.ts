export async function GET() {
  return Response.json({
    app: 114,
    status: "online",
    agent: "active"
  });
}
