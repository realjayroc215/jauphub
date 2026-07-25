export async function GET() {
  return Response.json({
    app: 832,
    status: "online",
    agent: "active"
  });
}
