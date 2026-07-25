export async function GET() {
  return Response.json({
    app: 768,
    status: "online",
    agent: "active"
  });
}
