export async function GET() {
  return Response.json({
    app: 455,
    status: "online",
    agent: "active"
  });
}
