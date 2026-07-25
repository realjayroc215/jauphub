export async function GET() {
  return Response.json({
    app: 300,
    status: "online",
    agent: "active"
  });
}
