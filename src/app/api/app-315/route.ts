export async function GET() {
  return Response.json({
    app: 315,
    status: "online",
    agent: "active"
  });
}
