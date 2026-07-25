export async function GET() {
  return Response.json({
    app: 350,
    status: "online",
    agent: "active"
  });
}
