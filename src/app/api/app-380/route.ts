export async function GET() {
  return Response.json({
    app: 380,
    status: "online",
    agent: "active"
  });
}
