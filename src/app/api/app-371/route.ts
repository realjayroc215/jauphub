export async function GET() {
  return Response.json({
    app: 371,
    status: "online",
    agent: "active"
  });
}
