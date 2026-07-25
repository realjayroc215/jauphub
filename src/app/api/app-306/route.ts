export async function GET() {
  return Response.json({
    app: 306,
    status: "online",
    agent: "active"
  });
}
