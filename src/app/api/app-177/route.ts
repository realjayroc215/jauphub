export async function GET() {
  return Response.json({
    app: 177,
    status: "online",
    agent: "active"
  });
}
