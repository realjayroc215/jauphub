export async function GET() {
  return Response.json({
    app: 254,
    status: "online",
    agent: "active"
  });
}
