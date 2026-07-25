export async function GET() {
  return Response.json({
    app: 517,
    status: "online",
    agent: "active"
  });
}
