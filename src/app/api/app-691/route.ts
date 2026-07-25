export async function GET() {
  return Response.json({
    app: 691,
    status: "online",
    agent: "active"
  });
}
