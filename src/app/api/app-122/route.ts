export async function GET() {
  return Response.json({
    app: 122,
    status: "online",
    agent: "active"
  });
}
