export async function GET() {
  return Response.json({
    app: 898,
    status: "online",
    agent: "active"
  });
}
