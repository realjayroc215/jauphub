export async function GET() {
  return Response.json({
    app: 30,
    status: "online",
    agent: "active"
  });
}
