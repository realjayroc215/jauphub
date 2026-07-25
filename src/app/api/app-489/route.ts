export async function GET() {
  return Response.json({
    app: 489,
    status: "online",
    agent: "active"
  });
}
