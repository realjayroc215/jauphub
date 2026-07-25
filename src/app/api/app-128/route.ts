export async function GET() {
  return Response.json({
    app: 128,
    status: "online",
    agent: "active"
  });
}
