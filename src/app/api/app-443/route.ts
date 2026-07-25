export async function GET() {
  return Response.json({
    app: 443,
    status: "online",
    agent: "active"
  });
}
