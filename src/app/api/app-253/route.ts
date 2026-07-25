export async function GET() {
  return Response.json({
    app: 253,
    status: "online",
    agent: "active"
  });
}
