export async function GET() {
  return Response.json({
    app: 979,
    status: "online",
    agent: "active"
  });
}
