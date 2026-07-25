export async function GET() {
  return Response.json({
    app: 208,
    status: "online",
    agent: "active"
  });
}
