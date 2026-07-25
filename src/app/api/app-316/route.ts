export async function GET() {
  return Response.json({
    app: 316,
    status: "online",
    agent: "active"
  });
}
