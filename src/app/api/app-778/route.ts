export async function GET() {
  return Response.json({
    app: 778,
    status: "online",
    agent: "active"
  });
}
