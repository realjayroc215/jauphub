export async function GET() {
  return Response.json({
    app: 541,
    status: "online",
    agent: "active"
  });
}
