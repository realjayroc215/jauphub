export async function GET() {
  return Response.json({
    app: 351,
    status: "online",
    agent: "active"
  });
}
