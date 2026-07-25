export async function GET() {
  return Response.json({
    app: 392,
    status: "online",
    agent: "active"
  });
}
