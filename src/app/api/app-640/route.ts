export async function GET() {
  return Response.json({
    app: 640,
    status: "online",
    agent: "active"
  });
}
