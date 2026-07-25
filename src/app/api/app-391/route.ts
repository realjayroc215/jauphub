export async function GET() {
  return Response.json({
    app: 391,
    status: "online",
    agent: "active"
  });
}
