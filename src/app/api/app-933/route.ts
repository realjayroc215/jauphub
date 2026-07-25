export async function GET() {
  return Response.json({
    app: 933,
    status: "online",
    agent: "active"
  });
}
