export async function GET() {
  return Response.json({
    app: 312,
    status: "online",
    agent: "active"
  });
}
