export async function GET() {
  return Response.json({
    app: 194,
    status: "online",
    agent: "active"
  });
}
