export async function GET() {
  return Response.json({
    app: 593,
    status: "online",
    agent: "active"
  });
}
