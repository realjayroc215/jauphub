export async function GET() {
  return Response.json({
    app: 281,
    status: "online",
    agent: "active"
  });
}
