export async function GET() {
  return Response.json({
    app: 250,
    status: "online",
    agent: "active"
  });
}
