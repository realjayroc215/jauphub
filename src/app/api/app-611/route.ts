export async function GET() {
  return Response.json({
    app: 611,
    status: "online",
    agent: "active"
  });
}
