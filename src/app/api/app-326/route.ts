export async function GET() {
  return Response.json({
    app: 326,
    status: "online",
    agent: "active"
  });
}
