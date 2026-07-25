export async function GET() {
  return Response.json({
    app: 667,
    status: "online",
    agent: "active"
  });
}
