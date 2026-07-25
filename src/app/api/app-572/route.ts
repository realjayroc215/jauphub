export async function GET() {
  return Response.json({
    app: 572,
    status: "online",
    agent: "active"
  });
}
