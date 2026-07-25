export async function GET() {
  return Response.json({
    app: 226,
    status: "online",
    agent: "active"
  });
}
