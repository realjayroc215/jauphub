export async function GET() {
  return Response.json({
    app: 720,
    status: "online",
    agent: "active"
  });
}
