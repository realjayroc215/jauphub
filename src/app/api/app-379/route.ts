export async function GET() {
  return Response.json({
    app: 379,
    status: "online",
    agent: "active"
  });
}
