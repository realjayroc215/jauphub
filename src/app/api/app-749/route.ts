export async function GET() {
  return Response.json({
    app: 749,
    status: "online",
    agent: "active"
  });
}
