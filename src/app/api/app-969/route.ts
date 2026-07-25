export async function GET() {
  return Response.json({
    app: 969,
    status: "online",
    agent: "active"
  });
}
