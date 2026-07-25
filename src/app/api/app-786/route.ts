export async function GET() {
  return Response.json({
    app: 786,
    status: "online",
    agent: "active"
  });
}
