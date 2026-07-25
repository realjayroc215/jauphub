export async function GET() {
  return Response.json({
    app: 475,
    status: "online",
    agent: "active"
  });
}
