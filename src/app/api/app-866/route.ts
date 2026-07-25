export async function GET() {
  return Response.json({
    app: 866,
    status: "online",
    agent: "active"
  });
}
