export async function GET() {
  return Response.json({
    app: 183,
    status: "online",
    agent: "active"
  });
}
