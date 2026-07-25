export async function GET() {
  return Response.json({
    app: 429,
    status: "online",
    agent: "active"
  });
}
