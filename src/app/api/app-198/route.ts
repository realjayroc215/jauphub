export async function GET() {
  return Response.json({
    app: 198,
    status: "online",
    agent: "active"
  });
}
