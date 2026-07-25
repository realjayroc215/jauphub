export async function GET() {
  return Response.json({
    app: 480,
    status: "online",
    agent: "active"
  });
}
