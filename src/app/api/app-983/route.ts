export async function GET() {
  return Response.json({
    app: 983,
    status: "online",
    agent: "active"
  });
}
