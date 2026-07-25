export async function GET() {
  return Response.json({
    app: 727,
    status: "online",
    agent: "active"
  });
}
